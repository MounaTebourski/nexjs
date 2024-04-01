import React from "react";
import Styles from "./admin.module.css";
import Link from "next/link";
import Image from "next/image";
import RemoveBtn from "@/components/removeButton/RemoveBtn";

const getEvents = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/events", {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Erreur lors du fetching events");
		}
		const data = await res.json();
		return data.events; // Accédez à la propriété 'events' de la réponse JSON
	} catch (error) {
		console.log("Error loading events : ", error);
	}
};

const AdminPage = async () => {
	const events = await getEvents();
	//console.log("Events from API:", events);
	return (
		<>
			<div className="overflow-x-auto">
				<div className="flex justify-between items-center">
					<h1 style={{ fontSize: "1.5rem" }}>
						Liste des evenements - Page Admin
					</h1>
				</div>
				<div style={{ textAlign: "right", margin: "10px" }}>
					<Link className={Styles.button} href={"/admin/addEvent"}>
						Add Event
					</Link>
				</div>
				<table className={Styles.table}>
					<thead>
						<tr>
							<th>
								<label>
									<input type="checkbox" className="checkbox" />
								</label>
							</th>
							<th>Title</th>
							<th>Description</th>
							<th>Date</th>
							<th>Place</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{events.map((rs) => (
							<tr className="hover" key={rs._id}>
								<th>
									<label>
										<input type="checkbox" className="checkbox" />
									</label>
								</th>
								<td>
									<div style={{ display: "flex", gap: "5px" }}>
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<Image
													src={`/events/${rs.img}`}
													alt={rs.alt}
													width={50}
													height={50}
													className="rounded-lg"
												/>
											</div>
										</div>
										<div>
											<div className="font-bold">{rs.title}</div>
										</div>
									</div>
								</td>
								<td>{rs.description}</td>
								<td>{rs.date}</td>
								<td>{rs.place}</td>
								<th style={{ display: "flex", gap: "10px" }}>
									<RemoveBtn id={rs._id} />
								</th>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default AdminPage;
