import { useState } from "react";

const Contact = () => {

  // 🔥 popup state
  const [showPopup, setShowPopup] = useState(false);

  // 🔥 form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  // 🔥 input handle
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 🔥 submit handle
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // 👉 popup open
    setShowPopup(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      {/* 🔥 Form */}
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-17 rounded-xl shadow w-96"
      >
        <h1 className="text-2xl font-bold mb-10">Contact Me</h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        ></textarea>

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>

      {/* 🔥 Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-xl font-bold mb-2">✅ Form Submitted</h2>
            <p className="mb-4">We will contact you soon.</p>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

export default Contact;