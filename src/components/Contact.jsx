import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
        action="https://getform.io/f/ab1e66f3-37d8-465d-97ed-728495e51c0d"
        method="POST"
        className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
            <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-2 border-stone-400 rounded-md px-4 py-2 mb-4 focus:outline-none"
            />
              <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="my-2 border-2 border-stone-400 rounded-md px-4 py-2 mb-4 focus:outline-none"
            />
            <textarea
            name="message"
            placeholder="Message"
            rows={10}
            className="resize-none border-2 border-stone-400 rounded-md px-4 py-2 mb-4 focus:outline-none"
            />
            <input
            type="text"
            name="honeypot"
            className="hidden"
            />
            <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-green-600 drop-shadow-md hover:bg-green-400 focus:outline-none"
            >Work With Me</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;