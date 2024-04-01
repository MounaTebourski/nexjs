"use client";
import Styles from "./removeButton.module.css";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
	const router = useRouter();
	const removeEvent = async () => {
		const confirmed = confirm("Are you sure?");

		if (confirmed) {
			const res = await fetch(`http://localhost:3000/api/events?id=${id}`, {
				method: "DELETE",
			});

			if (res.ok) {
				router.refresh();
			}
		}
	};

	return (
		<button onClick={removeEvent} className={Styles.button}>
			Delete
		</button>
	);
}
