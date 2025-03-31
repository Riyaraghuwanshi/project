import React from "react";
import { Users, Brain, Code, Shield, Calendar, Award } from "lucide-react";

const stats = [
  {
    icon: Award,
    title: "90%+",
    description: "ATS-Friendly Resumes Crafted",
  },
  {
    icon: Brain,
    title: "15+",
    description: "Students Empowered in Machine Learning",
  },
  {
    icon: Code,
    title: "20+",
    description: "Future App Developers Trained",
  },
  {
    icon: Users,
    title: "15+",
    description: "Web Developers Guided",
  },
  {
    icon: Users,
    title: "34+",
    description: "Mastering versatile tech domain",
  },
  {
    icon: Shield,
    title: "30+",
    description: "Cybersecurity Enthusiasts Mentored",
  },
  {
    icon: Calendar,
    title: "50+",
    description: "Events Organized",
  },
];

const App = () => {
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(11, 12, 12, 0.08) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-bold sm:text-6xl">
              <span className="inline-block bg-black bg-clip-text text-transparent pb-2 animate-gradient-x">
                Wall Of Impact
              </span>
            </h2>
            {/* <div className="h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full animate-shimmer" /> */}
          </div>

          <p className="mt-6 text-xl text-gray-600">
            Our community achievements in numbers
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.description}
              className="group relative"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`,
              }}
            >
              <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 h-full transition-all duration-300 group-hover:translate-y-[-4px] shadow-[0_0_20px_rgba(0,0,0,0.05)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden">
                <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-lg rounded-2xl" />
                </div>

                <div className="relative flex items-center justify-center mb-8">
                  <div className="absolute w-16 h-16 rounded-full animate-ping-slow opacity-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />
                  <div className="absolute w-16 h-16 rounded-full animate-ping-slower opacity-10 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600" />
                  <div className="absolute w-16 h-16 rounded-full animate-ping-slowest opacity-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

                  <div className="relative bg-gradient-to-r from-white to-gray-50 rounded-full p-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-100 to-pink-100 opacity-50 group-hover:opacity-100 transition-opacity blur-md" />
                    <div className="absolute inset-0 rounded-full animate-spin-slow opacity-50 bg-[conic-gradient(from_0deg,transparent_0%,transparent_60%,rgba(99,102,241,0.1)_80%,transparent_100%)]" />
                    <stat.icon
                      className="h-8 w-8 relative z-10 text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="text-center relative z-10">
                  <h3 className="text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                    {stat.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }
        @keyframes float-slowest {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        @keyframes ping-slow {
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        @keyframes ping-slower {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes ping-slowest {
          75%,
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 4s ease-in-out infinite;
        }
        .animate-float-slowest {
          animation: float-slowest 5s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-ping-slower {
          animation: ping-slower 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-ping-slowest {
          animation: ping-slowest 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
          background-size: 200% 100%;
        }
      `}</style>
    </div>
  );
};

export default App;
