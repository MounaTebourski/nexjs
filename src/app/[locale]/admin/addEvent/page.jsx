"use client";
import { useState } from "react";
import styles from "./addEvent.module.css";
import { useRouter } from "next/navigation";

const AdminEventForm = () => {
	const [formData, setFormData] = useState({
		title: "",
		date: "",
		place: "",
		img: "",
		alt: "",
		description: "",
	});

	const router = useRouter();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/events", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				console.log("Event created successfully!");
				router.push("/admin");
				// Ajouter ici toute logique de redirection ou de gestion après la création de l'événement
			} else {
				console.error("Failed to create event");
				// Ajouter ici toute logique de gestion des erreurs
			}
		} catch (error) {
			console.error("Error:", error);
			// Gérer les erreurs de connexion ou autres erreurs imprévues
		}
	};

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<h1 className={styles.title}>Ajouter un evenement</h1>
			<input
				type="text"
				name="title"
				placeholder="Title"
				value={formData.title}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="date"
				placeholder="Date"
				value={formData.date}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="place"
				placeholder="Place"
				value={formData.place}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="img"
				placeholder="Image"
				value={formData.img}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="alt"
				placeholder="alt"
				value={formData.alt}
				onChange={handleChange}
			/>
			<textarea
				type="text"
				name="description"
				placeholder="Description"
				rows={3}
				value={formData.description}
				onChange={handleChange}
			/>
			<button type="submit">Ajouter</button>
		</form>
	);
};

export default AdminEventForm;
