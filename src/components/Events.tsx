import React from "react";
import { Calendar, Users, Award, Code, Laptop } from "lucide-react";

const events = [
  {
    title: "Android Development Workshop",
    date: "March 15, 2024",
    image: "/images/slider9.png",
    description:
      "Hands-on workshop covering Android app development fundamentals and best practices",
    icon: Code,
  },
  {
    title: "Web Development Hackathon",
    date: "April 1-2, 2024",
    image: "/images/slider4.png",
    description:
      "24-hour hackathon focused on building innovative web applications",
    icon: Award,
  },

  {
    title: "Coding Quest",
    date: "May 1, 2024",
    image: "/images/slider10.jpg",
    description:
      "Annual coding competition with exciting prizes and recruitment opportunities",
    icon: Users,
  },
  {
    title: "Regular Classes",
    date: "April , 2025",
    image: "/events/classes.png",
    description:
      "Tailored mentorship sessions conducted by our experts via Google Classroom and Google Meet",
    icon: Laptop,
  },
];

const Events = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Upcoming Events
          </h2>
          {/* <p className="mt-4 text-xl text-gray-600">
            Join us for exciting learning opportunities
          </p> */}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <event.icon className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {event.title}
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
