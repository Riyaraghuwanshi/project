import React from "react";
import { Trophy, Star } from "lucide-react";

const categories = [
  {
    title: "Android Development",
    students: [
      {
        name: "Dipu Kumar",
        year: "2nd Year",
        achievements: ["5+ projects", "4+ certifications"],
      },
      {
        name: "Aryan Sharma",
        year: "3rd Year",
        achievements: [
          "10+ projects",
          "5+ hackathons",
          "Play Store deployments",
        ],
      },
    ],
  },
  {
    title: "Machine Learning",
    students: [
      {
        name: "Aman Mishra",
        year: "2nd Year",
        achievements: ["5+ major projects", "SIH 2024 Finalist"],
      },
      {
        name: "Deepika Deshmukh",
        year: "3rd Year",
        achievements: ["10+ projects", "5+ hackathons"],
      },
    ],
  },
  {
    title: "Web Development",
    students: [
      {
        name: "Prakhar",
        year: "2nd Year",
        achievements: ["10+ projects", "SIH 2024 Finalist"],
      },
      {
        name: "Naman Kumar",
        year: "3rd Year",
        achievements: ["5+ projects", "secured internship"],
      },
    ],
  },
  {
    title: "Cybersecurity",
    students: [
      {
        name: "Akash Kumar",
        year: "2nd Year",
        achievements: ["3+ projects", "ATS-optimized resume"],
      },
      {
        name: "Mohd Meraaz",
        year: "3rd Year",
        achievements: ["Successfully completed cybersecurity training"],
      },
    ],
  },
];

const HallOfFame = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Hall of Fame
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Celebrating our outstanding achievers
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="px-6 py-8">
                <div className="flex items-center mb-6">
                  <Trophy className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  {category.students.map((student) => (
                    <div
                      key={student.name}
                      className="bg-gray-50 rounded-xl p-6 hover:bg-indigo-50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">
                            {student.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {student.year}
                          </p>
                        </div>
                        <Star className="h-6 w-6 text-yellow-400" />
                      </div>
                      <ul className="space-y-2">
                        {student.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;
