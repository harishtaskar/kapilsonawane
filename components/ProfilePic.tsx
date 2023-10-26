import React from "react";
import Image from "next/image";
import profile from "@/public/assets/profile.png";

const ProfilePic = () => {
  return (
    <section className="w-full mx-auto rounded-full">
      <Image
        className="border border-slate-500 shadow-black rounded-full sm:w-[8rem] sm:h-[8rem] w-[6rem] h-[6rem] mx-auto mt-8"
        width={200}
        height={200}
        alt="harish"
        src={profile}
        priority={true}
      />
    </section>
  );
};

export default ProfilePic;
