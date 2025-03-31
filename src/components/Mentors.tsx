import React from "react";
import { Linkedin } from "lucide-react";

const mentors = [
  {
    name: "Ankit Kumar",
    image: "/mentors/ankit kumar.jpg",
    linkedin: "https://www.linkedin.com/in/ankitkumar0905/",
    role: "Senior Developer",
  },
  {
    name: "Anand Soni",
    image: "/mentors/Anand Soni.png",
    linkedin: "https://www.linkedin.com/in/anandsoni992/",
    role: "ML Expert",
  },
  {
    name: "Ankit Patel",
    image: "/mentors/ankit patel.jpg",
    linkedin: "https://www.linkedin.com/in/ankit-patel-563b9927b/",
    role: "Web Developer",
  },
];

const Mentors = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet the Mentors
          </h2>
          {/* <p className="mt-4 text-xl text-gray-600">
            Learn from experienced seniors who are passionate about helping you
            succeed
          </p> */}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="h-[500px] w-full">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {mentor.name}
                </h3>
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentors;
