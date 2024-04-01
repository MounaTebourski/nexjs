"use server";

import { connectToDB } from "./connectToDb";
import { Event } from "./models";

export const getEvents = async () => {
	try {
		connectToDB();
		const events = await Event.find();
		return events;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to fetch events!");
	}
};

export const getDataEvents = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/events", {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Erreur lors du fetching events");
		}
		const data = await res.json();
		return data.events; // Accédez à la propriété 'events' de la réponse JSON
	} catch (error) {
		console.log("Error loading events : ", error);
	}
};

export const getEvent = async (id) => {
	try {
		connectToDB();
		const event = await Event.findOne({ id });
		return event;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to fetch event!");
	}
};

export const addEvent = async (prevState, formData) => {
	const { title, description, date, place, img, alt } =
		Object.fromEntries(formData);

	try {
		connectToDB();
		const newEvent = new Event({
			title,
			description,
			date,
			place,
			img,
			alt,
		});

		await newEvent.save();
		console.log("saved to db");
		revalidatePath("/events");
		revalidatePath("/admin");
	} catch (err) {
		console.log(err);
		return { error: "Something went wrong!" };
	}
};
