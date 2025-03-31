import React from "react";
import { BookOpen, Users, Trophy, Briefcase, ChevronRight } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Hands-on Learning",
    description: "Work on real-world projects under expert guidance",
  },
  {
    icon: Users,
    title: "Exclusive Workshops",
    description: "Access to specialized workshops and hackathons",
  },
  {
    icon: Trophy,
    title: "Personalized Mentorship",
    description: "One-on-one guidance from industry-ready seniors",
  },
  {
    icon: Briefcase,
    title: "Career Ready",
    description: "Build a robust technical portfolio for placements",
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* About Section with improved responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
            About TIT Developer Community
          </h2>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed px-4 sm:px-6">
            A student-led initiative bridging the gap between juniors and
            seniors through free mentorship. We offer guidance through
            mentorship programs, hackathons, and workshops to help students
            succeed in the tech industry.
          </p>
        </div>
      </div>

      {/* Why Join Us Section with improved grid spacing */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Join Us?
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="icon-wrapper bg-indigo-50 rounded-lg p-3 inline-flex">
                <feature.icon
                  className="h-6 w-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors flex items-center">
                  {feature.title}
                  <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="mt-2 text-base text-gray-500 group-hover:text-gray-600 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Section with improved spacing and responsiveness */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
          <div className="mission-card bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 sm:px-8 py-10 sm:py-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                Our Mission
                <div className="ml-4 h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  We offer comprehensive guidance through structured mentorship
                  programs, engaging hackathons, and hands-on workshops to help
                  students succeed in the tech industry. Our community fosters a
                  collaborative environment where knowledge sharing and
                  practical experience go hand in hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
