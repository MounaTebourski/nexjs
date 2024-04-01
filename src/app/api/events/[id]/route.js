import { NextResponse } from "next/server";
import { connectToDB } from "../../../../../libs/connectToDb";
import { Event } from "../../../../../libs/models";

export async function PUT(request, { params }) {
	const { id } = params;
	const {
		title: title,
		description: description,
		date: date,
		place: place,
		img: img,
		alt: alt,
	} = await request.json();
	connectToDB();
	await Event.findByIdAndUpdate(id, {
		title,
		description,
		date,
		place,
		img,
		alt,
	});
	return NextResponse.json({ message: "Event updated" }, { status: 200 });
}

export async function GET(request, { params }) {
	const { id } = params;
	connectToDB();
	const event = await Event.findOne({ _id: id });
	return NextResponse.json({ event }, { status: 200 });
}
