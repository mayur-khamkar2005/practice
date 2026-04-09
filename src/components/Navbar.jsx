import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow">
      <h1 className="text-black font-bold text-xl">My App</h1>

      <div className="flex items-center gap-6">
        <Link className="cursor-pointer border border-black rounded px-3 py-1 hover:bg-yellow-50 transition" to="/">
          Home
        </Link>
        <Link
          className="cursor-pointer border border-black rounded px-3 py-1 hover:bg-yellow-50 transition"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="cursor-pointer border border-black rounded px-3 py-1 hover:bg-yellow-50 transition"
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
