import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const validateName = (name) => {
    if (name.trim().length < 2) {
      setError("Name must be at least 2 characters long");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateName(name)) {
      console.log("Form submitted with name:", name);
    }
    setName("");
  };

  const handleChange = (event) => {
    const value = event.target.value;

    setName(value);

    // Revalidate only if an error is already displayed
    if (error) {
      validateName(value);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          Contact Us
        </h1>

        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="mb-2 w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && (
          <p className="mb-4 text-sm text-red-500">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Submit
        </button>

        <p className="mt-4 text-gray-600">
          Name: {name}
        </p>
      </form>
    </main>
  );
};

export default ContactUs;