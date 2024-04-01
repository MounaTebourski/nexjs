"use client";
import Styles from "./editForm.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditEventForm({ event, onSubmit }) {
	const [newEvent, setNewEvent] = useState(event);

	const router = useRouter();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewEvent((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(`/api/events/${newEvent?._id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newEvent),
			});
			if (response.ok) {
				console.log("Event updated successfully!");
				router.push("/admin");
			} else {
				console.error("Failed to update event");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className={Styles.container}>
			<h1 className={Styles.title}>Edit un evenement</h1>
			<input
				onChange={handleChange}
				value={newEvent?.title ?? "test"}
				type="text"
				name="title"
				placeholder="Title"
			/>

			<input
				onChange={handleChange}
				value={newEvent?.description}
				type="text"
				name="description"
				placeholder="Description"
			/>

			<input
				onChange={handleChange}
				value={newEvent?.date}
				type="text"
				name="date"
				placeholder="Date"
			/>
			<input
				onChange={handleChange}
				value={newEvent?.place}
				type="text"
				name="place"
				placeholder="Place"
			/>
			<input
				onChange={handleChange}
				value={newEvent?.img}
				type="text"
				name="img"
				placeholder="Img"
			/>
			<input
				onChange={handleChange}
				value={newEvent?.alt}
				type="text"
				name="alt"
				placeholder="Alt"
			/>

			<button>Update Events</button>
		</form>
	);
}
