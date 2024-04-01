import ContactForm from "@/components/contactForm/ContactForm";
import ContactReactHookForm from "@/components/contactForm/ContactReactHookForm";
import React from "react";

export const metadata = {
	title: { absolute: "Contactez nous" },
	description: "Generated by create next app",
};

const Contact = () => {
	return (
		<div style={{ padding: "50px" }}>
			{/*<ContactForm />
			 */}

			<ContactReactHookForm />
		</div>
	);
};

export default Contact;
