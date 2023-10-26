import { Metadata } from "next";
import React from "react";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import ProfilePic from "@/components/ProfilePic";

export const metadata: Metadata = {
  title: {
    default: "Kapil Sonalwane",
    template: "%s | Kapil Sonalwane",
  },
  description: "Created by Kapil Sonalwane",
  icons: "/assets/vercel.svg",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className="bg-gray-950 pb-4">
        <NavBar />
        <ProfilePic />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
