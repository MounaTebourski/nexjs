import React from "react";
import events from "../../../../data/data.json";
import TemplatePage from "@/components/templatePage/TemplatePage";
import Link from "next/link";
import styles from "./eventDetails.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useLocale } from "next-intl";

export const metadata = {
	title: "Details",
};

function getEventById(id) {
	// Utilisez la méthode find pour rechercher l'objet avec l'ID correspondant
	return events.find((event) => event.id === Number(id));
}

const EventDetails = ({ params }) => {
	const event = getEventById(params.eventId);

	const urlImgEvent = `/events/${event.src}`;

	const local = useLocale();

	const urlEvents = `/${local}/events`;

	return (
		<div>
			{event ? (
				<div className={styles.container}>
					<Link className={styles.link} href={urlEvents}>
						<ArrowBackIosIcon />
						{" Retourner"}
					</Link>
					<TemplatePage
						title={event.title}
						description={event.description}
						src={urlImgEvent}
						alt={event.alt}
						date={event.date}
						place={event.place}
						textButton1="BILLETS"
					/>
				</div>
			) : (
				<div>L'événement avec l'ID {params.eventId} n'a pas été trouvé.</div>
			)}
		</div>
	);
};

export default EventDetails;
