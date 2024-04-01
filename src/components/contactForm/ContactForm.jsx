"use client";
import React, { useState } from "react";
import styles from "./contactform.module.css";

function validation(value) {
	let error = {};

	if (!value.nomprenom) {
		error.nomprenom = "Nom et prénom requis !";
	}
	if (!value.email) {
		error.email = "Email requis !";
	} else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(value.email)) {
		error.email = "Email non valide !";
	}

	if (!value.message) {
		error.message = "Message requis !";
	} else if (value.message.length < 5) {
		error.message = "Message très court !";
	}
	return error;
}

const ContactForm = () => {
	const [formData, setFormData] = useState({
		nomprenom: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false); // État pour gérer l'affichage du message de confirmation

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		// Appeler la fonction de validation à chaque changement dans les champs de saisie
		setErrors(validation({ ...formData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Valide le formulaire
		const validationErrors = validation(formData);
		setErrors(validationErrors);

		// Vérifier si le formulaire est valide avant de soumettre
		if (Object.keys(validationErrors).length === 0) {
			// Soumettre le formulaire ici
			console.log("Formulaire soumis !");
			// Le formulaire est valide, affiche le message de confirmation
			setIsSubmitted(true);
		} else {
			setIsSubmitted(false);
		}
	};

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<h1 className={styles.title}>Contactez Nous</h1>
			<input
				type="text"
				name="nomprenom"
				placeholder="Nom et prenom"
				value={formData.nomprenom}
				onChange={handleChange}
			/>
			{errors.nomprenom && (
				<div className={styles.error}>{errors.nomprenom}</div>
			)}
			<input
				type="text"
				name="email"
				placeholder="Adresse Email"
				value={formData.email}
				onChange={handleChange}
			/>
			{errors.email && <div className={styles.error}>{errors.email}</div>}
			<textarea
				type="text"
				name="message"
				placeholder="Ecrivez un message !"
				rows={4}
				value={formData.message}
				onChange={handleChange}
			/>
			{errors.message && <div className={styles.error}>{errors.message}</div>}
			{isSubmitted && (
				<div className={styles.confirmation}>
					Votre message a bien été reçu !
				</div>
			)}{" "}
			{/* Affiche le message de confirmation */}
			<button type="submit">Envoyer</button>
		</form>
	);
};

export default ContactForm;
