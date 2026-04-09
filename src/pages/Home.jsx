import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  if (open) {
    return <h1>Your button is open</h1>;
  }

  return (
    <div className="grid grid-cols-2 gap-8 p-10">

      {/* Left Content */}
      <div className=" p-20 w-0.1">
        <h1 className="text-2xl font-bold mb-4">
          Hy My Name Is Mayur
        </h1>

        <h2 className="text-red-600 font-semibold mb-2">
          I Am A Developer
        </h2>

        <p className="text-gray-600">
          Passionate about my career and growth.
          I am eager to learn new things.
        </p>

        <button
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
          onClick={() => navigate("/myinfo")}
        >
          Hire Me
        </button>
      </div>

      {/* Right Image */}
      <div className="flex items-center justify-center">
        <img
          src="https://via.placeholder.com/300"
          alt="profile"
          className="rounded-xl"
        />
      </div>

    </div>
  );
}

export default Home;