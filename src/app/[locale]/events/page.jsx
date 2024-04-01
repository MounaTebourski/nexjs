import events from "../../../data/data.json";
import React from "react";
import Styles from "./events.module.css";
import EventCard from "@/components/eventCard/EventCard";

const Events = () => {
	const urlImgEvent = "/events/";

	return (
		<div className={Styles.container}>
			<h1 className={Styles.title}>BILLETS JOURNALIERS EN VENTE MAINTENANT</h1>
			<p className={Styles.description}>
				PROGRAMMATION 2024 NOAH KAHAN, GREEN DAY, SZA et beaucoup plus !
			</p>

			<div className={Styles.cardContainer}>
				{events?.map((item, index) => (
					<EventCard
						id={item.id}
						imgSrc={urlImgEvent + item.src}
						imgAlt={item.alt}
						title={item.title}
						description={item.description}
						date={item.date}
						place={item.place}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Events;
