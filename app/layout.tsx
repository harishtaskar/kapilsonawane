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
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className="bg-gray-900 ">
        <NavBar />
        <ProfilePic />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
