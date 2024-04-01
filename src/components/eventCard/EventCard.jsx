"use client";
import React from "react";
import Styles from "./eventCard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const EventCard = ({
	id,
	imgSrc = "green.jpg",
	imgAlt = "green day",
	title = "GREEN DAY THE SMASHING PUMPKINS",
	description = "It has been over six years since Green Day last came around to play a show in Montreal",
	date = "August 3",
	place = "Saturday, August 3 at Parc Jean-Drapeau, Montreal",
	buttonText = "BILLETS",
}) => {
	const router = useRouter();
	const local = useLocale();
	const eventHref = `/${local}/events/${id}`;

	const handleClick = (e) => {
		e.preventDefault();

		router.push(eventHref);
	};

	return (
		<div className={Styles.eventCardContainer}>
			<div className={Styles.container}>
				<div className={Styles.fieldDay}>{date}</div>
				<div className={Styles.fielDetails}>
					<div className={Styles.title}>{title.toUpperCase()}</div>
					<div className={Styles.date}>{place}</div>
					<div className={Styles.description}>{description}</div>
				</div>
				<div className={Styles.fieldImg}>
					<Image src={imgSrc} alt={imgAlt} fill />
				</div>
			</div>
			<div className={Styles.fieldButton}>
				<button className={Styles.button} onClick={handleClick}>
					{buttonText}
				</button>
			</div>
		</div>
	);
};

export default EventCard;
