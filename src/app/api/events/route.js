import { NextResponse } from "next/server";
import { connectToDB } from "../../../../libs/connectToDb";
import { Event } from "../../../../libs/models";

export async function POST(request, res) {
	if (request.method === "POST") {
		await connectToDB();

		try {
			const { title, description, date, place, img, alt } =
				await request.json();

			await Event.create({ title, description, date, place, img, alt });

			return NextResponse.json({ message: "Event Created" }, { status: 201 });
		} catch (error) {
			console.error("Erreur lors de l'ajout de l'élément :", error);
			res.status(500).json({ message: "Erreur lors de l'ajout de l'élément" });
		}
	} else {
		res
			.status(405)
			.json({ message: "Seules les requêtes POST sont autorisées" });
	}
}

export async function GET() {
	//return NextResponse.json({ message: "Hello" });

	connectToDB();
	const events = await Event.find();
	return NextResponse.json({ events });
}

export async function DELETE(request) {
	const id = request.nextUrl.searchParams.get("id");
	connectToDB();
	await Event.findByIdAndDelete(id);
	return NextResponse.json({ message: "Event deleted" }, { status: 200 });
}
