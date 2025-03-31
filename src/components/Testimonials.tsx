import React from "react";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const students = [
  {
    name: "Sarthak Kumar",
    enrollment: "0191CS231234",
    groups: ["Web Dev"],
    photo: "/testinomials/IMG_20230808_234434 - Sarthak Kumar Mahto.jpg",
  },
  {
    name: "Mohd Meraaz",
    enrollment: "0191AL221090",
    groups: ["Cyber", "Android"],
    photo: "/testinomials/IMG_20250125_115016 - Mohd Meraaz.jpg",
  },
  {
    name: "Siddharth Kumar",
    enrollment: "0192CS231193",
    groups: ["Android"],
    photo: "/testinomials/sid 2 - Siddharth Kumar.jpg",
  },
  {
    name: "Aryan Sharma",
    enrollment: "0192CS221051",
    groups: ["Cyber", "Android"],
    photo: "/testinomials/IMG-20231028-WA0013 - Aryan.jpg",
  },
  {
    name: "Nikhil Kumar Gupta",
    enrollment: "0191CS231171",
    groups: ["ML", "Cyber"],
    photo: "/testinomials/20230712_125408 - Nikhil Kumar gupta.jpg",
  },
  {
    name: "Rishabh Raj",
    enrollment: "0111IT231100",
    groups: ["Web Dev"],
    photo: "/testinomials/SAVE_20250322_130701 - Rishabh Raj.jpg",
  },
  {
    name: "Naman Kumar",
    enrollment: "0191CS221137",
    groups: ["Web Dev"],
    photo: "/testinomials/IMG_20250312_181151 - Naman Kumar.jpg",
  },
  {
    name: "Rohit Tiwari",
    enrollment: "0111CD231111",
    groups: ["ML", "Web Dev"],
    photo: "/testinomials/IMG-20230212-WA0000 - Rohit Tiwari.jpg",
  },
  {
    name: "Om Prakash Mehta",
    enrollment: "0191CS231177",
    groups: ["Cyber"],
    photo: "/testinomials/Screenshot 2025-03-22 132423 - Om Prakash.png",
  },
  {
    name: "Shashank Kumar",
    enrollment: "0111AL231244",
    groups: ["Web Dev"],
    photo: "/testinomials/Screenshot_2024_0526_204134 - Shashank Agrawal.jpg",
  },
  {
    name: "Anikesh Sharma",
    enrollment: "0191CS231044",
    groups: ["ML"],
    photo: "/testinomials/photo09 - Anikesh Sharma.png",
  },
  {
    name: "Sheetal Kawadkar",
    enrollment: "0191AL221162",
    groups: ["Web Dev"],
    photo:
      "/testinomials/Screenshot_2025-03-22-13-17-17-82_99c04817c0de5652397fc8b56c3b3817 - Sheetal Kawadkar.jpg",
  },
  {
    name: "Dipu Kumar",
    enrollment: "0191CS231111",
    groups: ["Cyber", "Android"],
    photo: "/testinomials/Screenshot_20250313-092840 - Dipu Kumar.png",
  },
  {
    name: "Shaloni Mishra",
    enrollment: "0191AL221160",
    groups: ["ML", "Web Dev"],
    photo: "/testinomials/shaloni.image - shaloni mishra.jpg",
  },
  {
    name: "Aditi Gupta",
    enrollment: "0192CS221010",
    groups: ["Cyber", "Android"],

    photo: "/testinomials/Q5 passport - Aditi Gupta.jpg",
  },
  {
    name: "Neetesh Chaurasia",
    enrollment: "0111IA231075",
    groups: ["Web Dev"],
    photo: "/testinomials/1732130718620 - Neetesh Chaurasia.jpg",
  },
  {
    name: "Prince Kumar",
    enrollment: "0191CS231198",
    groups: ["Web Dev"],
    photo: "/testinomials/1710599476684 - Prince Singh.jpg",
  },
  {
    name: "Shivam Kumar Tiwari",
    enrollment: "0111CD231132",
    groups: ["ML", "Web Dev", "Cyber"],
    photo: "/testinomials/Lumii_20250322_170719561 - SHIVAM Tiwari.jpg",
  },
  {
    name: "Harshit Anandd",
    enrollment: "0191CS221090",
    groups: ["Web Dev", "Cyber", "Android"],
    photo: "/testinomials/IMG_20250105_195802 - Harshit Anandd.jpg",
  },
  {
    name: "Akash Kumar",
    enrollment: "0191CS231029",
    groups: ["Cyber"],
    photo: "/testinomials/1697030555149 (1) - Akash Kumar.jpeg",
  },
  {
    name: "Ananya Gupta",
    enrollment: "0191AL221019",
    groups: ["Web Dev"],
    photo: "/testinomials/IMG_20240423_182754 - Ananya Gupta.jpg",
  },
  {
    name: "Yashraj Chouhan",
    enrollment: "0191AL221204",
    groups: ["Cyber"],
    photo: "/testinomials/pp - Y A S H R A J.png",
  },
  {
    name: "Sejal Tiwari",
    enrollment: "1091CS231241",
    groups: ["ML", "Web Dev", "Cyber", "Android"],
    photo: "/testinomials/1713849411189 - Sejal Tiwari.png",
  },
  {
    name: "Aman Mishra",
    enrollment: "0191CS231034",
    groups: ["ML"],
    photo: "/testinomials/amanmishra.jpg",
  },
  {
    name: "Prakhar Shrivastava",
    enrollment: "0191CS231189",
    groups: ["ML", "Web Dev", "Cyber"],
    photo: "/testinomials/IMG_20250325_162206 - Icy_Bear.jpg",
  },
  {
    name: "Deepika Deshmukh",
    enrollment: "0192AL221028",
    groups: ["ML", "Web Dev"],
    photo: "/testinomials/deepika_photo - Anand Soni.jpg",
  },
];

const domains = ["ML", "Web Dev", "Cyber", "Android"];

const testimonials = [
  {
    name: "Ankit Kumar",
    role: "Engineer Intern at Ramraj Technology Solutions | Python, Java, AWS, AI Fundamentals",
    image: "/mentors/ankit kumar.jpg",
    quote:
      "The mentorship I received at TIT Developer Community was instrumental in landing my good soft skills and confident.",
  },
  {
    name: "Anand Soni",
    role: "Placed in Capgemini• TCS(Digital)• Accenture• KPIT• Acmegrade• 8+ Job offers• 2+ AICTE Internships• 5X Microsoft Certified• 2X GitHub Certified• TITE'25",
    image: "/mentors/Anand Soni.png",
    quote:
      "The practical experience and guidance helped me become a confident problem solver.",
  },
  {
    name: "Ankit Patel",
    role: "Passionate Engineering Student | Seeking Internships & Networking Opportunities | Problem-Solver and Innovator | Committed to Sustainable Solutions |Eager to Solve Complex Problems",
    image: "/mentors/ankit patel.jpg",
    quote:
      "The community's support was crucial in my journey from a beginner to a professional.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Domain Groups Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Domain Groups
            </h2>
          </div>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
            className="domain-groups-slider"
          >
            {domains.map((domain) => {
              const domainStudents = students.filter((student) =>
                student.groups.includes(domain)
              );

              if (domainStudents.length === 0) return null;

              return (
                <SwiperSlide key={domain} className="pb-12">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {domain} Students
                      </h3>
                      <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                        {domainStudents.length} Members
                      </span>
                    </div>
                    <div className="h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                      <div className="space-y-4">
                        {domainStudents.map((student) => (
                          <div
                            key={student.enrollment}
                            className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4 hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1"
                          >
                            <div className="relative">
                              <img
                                src={student.photo}
                                alt={student.name}
                                className="w-16 h-16 rounded-full object-cover ring-2 ring-indigo-100"
                              />
                              <div className="absolute -bottom-1 -right-1 bg-green-400 w-4 h-4 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">
                                {student.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {student.enrollment}
                              </p>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {student.groups.map((group) => (
                                  <span
                                    key={group}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                                  >
                                    {group}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Testimonials Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Alumni Success Stories
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <Quote className="h-8 w-8 text-indigo-600 mb-4" />
                <blockquote className="text-lg text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-indigo-100"
                  />
                  <div className="ml-4">
                    <div className="text-base font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-indigo-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        .domain-groups-slider {
          padding-bottom: 3rem !important;
        }

        .domain-groups-slider .swiper-slide {
          opacity: 0.7;
          transition: opacity 0.3s;
        }

        .domain-groups-slider .swiper-slide-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
