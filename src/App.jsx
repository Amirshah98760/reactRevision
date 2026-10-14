import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [name, setName] = useState("");
  

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Hello, ${name}!`);
  }

  return (
    <>
      <Navbar />
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
   < div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
        className="border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
<br />
      <button type="submit" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
      <p>{name}</p>
    </form>
      </div>
 </main>
 </>
  );
}

export default App;