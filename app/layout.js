import { Indie_Flower, Pangolin } from "next/font/google";
import "./globals.css";

const indieFlower = Indie_Flower({
  variable: "--font-indie-flower",
  subsets: ["latin"],
  weight: "400",
});
const pangolin = Pangolin({
  variable: "--font-pangolin",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "My Valentine",
  description: "A simple app for my Valentine - Analy Encallado Flores.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${indieFlower.variable} ${pangolin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
