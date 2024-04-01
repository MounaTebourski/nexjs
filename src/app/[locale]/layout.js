import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import { AppProvider } from "@/context/AppContext";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		absolute: "",
		default: "Booking events",
		template: "%s | Booking events",
	},
	description: "Generated by create next app",
};

export default function RootLayout({ children, params: { locale } }) {
	return (
		<html lang={locale}>
			<body>
				<AppProvider>
					<ThemeProvider>
						<div className="container">
							<Navbar />
							<div className="content">{children}</div>
							<div className="footer">
								<Footer />
							</div>
						</div>
					</ThemeProvider>
				</AppProvider>
			</body>
		</html>
	);
}