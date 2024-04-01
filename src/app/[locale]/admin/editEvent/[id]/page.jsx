// pages/admin/editEvent/[id].jsx

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { updateEvent } from "@/utils/api"; // Utilisez vos propres fonctions d'API pour interagir avec MongoDB
import { getEvent } from "../../../../../../libs/action";

const EditEventPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const [event, setEvent] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const eventData = await getEvent(id); // Fonction pour récupérer l'événement par ID depuis MongoDB
				setEvent(eventData);
			} catch (error) {
				console.error("Error fetching event:", error);
			}
		};

		if (id) {
			fetchData();
		}
	}, [id]);

	const handleSubmit = async (updatedEvent) => {
		try {
			await updateEvent(id, updatedEvent); // Fonction pour mettre à jour l'événement dans MongoDB
			router.push(`/admin/editEvent/${id}`);
		} catch (error) {
			console.error("Error updating event:", error);
		}
	};

	if (!event) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Edit Event</h1>
			{/* Formulaire de modification d'événement */}
			<EditEventForm event={event} />
		</div>
	);
};

export default EditEventPage;
