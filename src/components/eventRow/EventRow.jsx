"use client";
import { useRouter } from "next/navigation";
import Styles from "./eventRow.module.css";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

export default function EventRow({
	id,
	title,
	description,
	date,
	place,
	img,
	alt,
}) {
	const router = useRouter();

	return (
		<div key={id} className={Styles.containerEvent}>
			<h1 className={Styles.title}>{title}</h1>
			<div className={Styles.date}>{date}</div>
			<div className={Styles.place}>{place}</div>
			<div className={Styles.img}>{img}</div>
			<div className={Styles.iconContainer}>
				<CreateIcon
					color="secondary"
					onClick={() => {
						router.push(`/admin/${id}`);
					}}
				/>

				<DeleteIcon color="secondary" />
			</div>
		</div>
	);
}
