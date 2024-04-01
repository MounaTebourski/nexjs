"use client";
import Styles from "./localSwitcher.module.css";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Button from "@mui/material/Button";

export default function LocalSwitcher() {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const localActive = useLocale();

	const onHandleClick = () => {
		const nextLocale = localActive === "en" ? "fr" : "en";
		startTransition(() => {
			router.replace(`/${nextLocale}`);
		});
	};

	return (
		<>
			<div>
				{localActive === "en" ? (
					<Button
						className={Styles.button}
						variant="text"
						color="inherit"
						onClick={onHandleClick}
						disabled={isPending}
					>
						Fr
					</Button>
				) : (
					<Button
						className={Styles.button}
						variant="text"
						color="inherit"
						onClick={onHandleClick}
						disabled={isPending}
					>
						EN
					</Button>
				)}
			</div>
		</>
	);
}
