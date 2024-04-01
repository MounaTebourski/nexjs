"use client";
import styles from "./contactform.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
	.object({
		nomprenom: yup.string().required(),
		email: yup.string().required().email(),
		message: yup.string().required(),
	})
	.required();

export default function ContactReactHookForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitSuccessful },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data) => console.log(data);

	const displayMessage = isValid && isSubmitSuccessful;

	return (
		<form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
			<h1 className={styles.title}>Contactez Nous</h1>
			<input {...register("nomprenom")} placeholder="Nom et prenom" />
			<p className={styles.error}>{errors.nomprenom?.message}</p>

			<input {...register("email")} placeholder="Email" />
			<p className={styles.error}>{errors.email?.message}</p>
			<textarea
				type="text"
				name="message"
				{...register("message")}
				placeholder="Ecrivez un message !"
				rows={4}
			/>
			<p className={styles.error}>{errors.message?.message}</p>

			<button type="submit">Envoyer</button>
			{displayMessage && (
				<p className={styles.confirmation}>Votre message a bien été reçu !</p>
			)}
		</form>
	);
}
