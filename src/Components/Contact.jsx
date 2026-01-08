import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your logic here (e.g., EmailJS or a backend API)
    alert("Thanks for reaching out! I'll get back to you soon.");
  };
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Let’s <span className="text-blue-600">Connect.</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Whether you have a question about this project, a potential
            collaboration, or just want to talk shop—my inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* COLUMN 1: CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Details</h3>
              <p className="text-gray-600 mb-2">
                Email:{" "}
                <span className="text-blue-600 font-medium">
                  hello@yourdomain.com
                </span>
              </p>
              <p className="text-gray-600">
                Location: Remote / Bengaluru, India
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Social Presence</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                >
                  {/* GitHub Icon SVG */}
                  GitHub
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                >
                  {/* LinkedIn Icon SVG */}
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-2">Working Hours</h4>
              <p className="text-blue-800 text-sm">
                Mon - Fri: 9:00 AM — 6:00 PM IST
              </p>
            </div>
          </div>

          {/* COLUMN 2: CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="John Doe"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="john@example.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="How can I help you?"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-black transition-all active:scale-95"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
