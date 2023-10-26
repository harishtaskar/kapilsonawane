import React from "react";
import HeadingText from "./HeadingText";

const ContactMe = () => {
  return (
    <div className="border rounded-lg p-2 border-gray-700 w-full max-w-4xl flex flex-col gap-4">
      <HeadingText title="Contact Me" />
      <form className="flex flex-col gap-4 text-white p-2 text-lg font-light">
        <div className="flex flex-col gap-4">
          <input
            id="email"
            type="email"
            className="p-2 px-4 text-sm sm:text-base text-white bg-gray-700 border border-gray-600 rounded-sm sm:rounded-md"
            placeholder="Your Email"
            required
          />
          <textarea
            className="p-2 px-4 text-sm sm:text-base text-white bg-gray-700 border border-gray-600 rounded-sm sm:rounded-md"
            placeholder="Message..."
            required
          />
        </div>
        <button className="bg-white text-sm sm:text-sm font-medium text-black border border-gray-300 rounded-sm sm:rounded-md py-2">
          Let&apos;s Connect
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
