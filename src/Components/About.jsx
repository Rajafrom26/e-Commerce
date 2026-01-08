import React, { useState } from "react";
import Magnifier from "../Magnifier/Magnifier";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* HERO / INTRO */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
            <img
              src="https://reviewed-com-res.cloudinary.com/image/fetch/s--pRiy2kSy--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_792/https://reviewed-production.s3.amazonaws.com/attachment/e1200301e55849d1/Shot_by_JR_-_12.jpg"
              alt="Developer Portrait"
              onClick={() => setIsOpen(true)}
              className="w-full h-full object-cover cursor-pointer "
            />
          </div>
          {isOpen && (
            <div className="fixed inset-0 bg-white/50 backdrop-blur-md flex items-center justify-center z-50">
              <img
                src="https://reviewed-com-res.cloudinary.com/image/fetch/s--pRiy2kSy--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_792/https://reviewed-production.s3.amazonaws.com/attachment/e1200301e55849d1/Shot_by_JR_-_12.jpg"
                className="max-w-full max-h-full rounded-full w-1/4 h-96"
              />
              <button
                className="absolute top-5 right-10 text-black text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
                aria-label="close"
              >
                &times;
              </button>
            </div>
          )}
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          Building Products, <br />
          <span className="text-blue-600">One Line at a Time.</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          I'm a developer who loves the intersection of clean design and complex
          logic. This store is more than just a shop—it's a reflection of my
          journey in mastering the modern web.
        </p>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Roadmap</h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {/* 2022: The Start */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                🚀
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
                <time className="font-bold text-blue-600">2025 - JUL</time>
                <h3 className="text-xl font-bold mt-1">
                  The First Hello World
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  My journey began with simple HTML/CSS. I was obsessed with how
                  a few words on a screen could turn into a visual interface.
                </p>
              </div>
            </div>

            {/* 2024: The Logic */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                💻
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
                <time className="font-bold text-blue-600">2025- DEC</time>
                <h3 className="text-xl font-bold mt-1">Deep Dive into React</h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  I moved from static pages to dynamic applications. I learned
                  how to manage state, build custom hooks, and handle complex UI
                  interactions.
                </p>
              </div>
            </div>

            {/* Present: This Site */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                📦
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
                <time className="font-bold text-blue-600">2025 - 2026</time>
                <h3 className="text-xl font-bold mt-1">
                  Engineering an Experience
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  This e-commerce site is the culmination of my work. From the
                  custom Aside Magnifier logic to the seamless gallery
                  transitions, it’s built for performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">My Toolbox</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Tailwind CSS",
            "JavaScript ES6",
            "Git",
            "Vite",
            "Responsive Design",
          ].map((tech) => (
            <span
              key={tech}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold border border-gray-200 hover:bg-blue-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
