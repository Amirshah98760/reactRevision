import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            className="mb-4 rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <br />
          <button
            type="submit"
            className="cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Submit
          </button>
          <p>{name}</p>
        </form>
      </div>
    </main>
  )
}

export default ContactUs
