import React from "react";
import {
  Calendar,
  Trophy,
  CheckCircle,
  ArrowRight,
  Clock,
  Briefcase,
} from "lucide-react";

const JoinUs = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Join Our Community
          </h2>
        </div>

        <div className="mt-20">
          {/* Coding Quest Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Coding Quest
                  </h3>
                  <p className="mt-4 text-base sm:text-lg text-indigo-100">
                    Annual competition fostering technical skills and community
                    recruitment
                  </p>

                  <div className="mt-8 space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-200" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base sm:text-lg font-semibold text-white">
                          Round 1: MCQ
                        </h4>
                        <p className="mt-2 text-sm sm:text-base text-indigo-100">
                          Technical knowledge assessment via our custom app
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-200" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base sm:text-lg font-semibold text-white">
                          Round 2: Coding
                        </h4>
                        <p className="mt-2 text-sm sm:text-base text-indigo-100">
                          Practical coding challenges on Unstop platform
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 space-y-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-white">
                      Key Statistics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-xl sm:text-2xl font-bold text-white">
                          200+
                        </div>
                        <div className="text-sm sm:text-base text-indigo-100">
                          Participants
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-xl sm:text-2xl font-bold text-white">
                          60
                        </div>
                        <div className="text-sm sm:text-base text-indigo-100">
                          Finalists
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 lg:mt-0">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="px-4 sm:px-6 py-6 sm:py-8">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                        Registration Guide
                      </h4>
                      <div className="mt-6 space-y-4">
                        <div className="flex items-start text-gray-600">
                          <Calendar className="h-5 w-5 mr-3 text-indigo-600 mt-1 flex-shrink-0" />
                          <span className="text-sm sm:text-base">
                            Open for 1st to 4th-year students
                          </span>
                        </div>
                        <div className="flex items-start text-gray-600">
                          <Trophy className="h-5 w-5 mr-3 text-indigo-600 mt-1 flex-shrink-0" />
                          <span className="text-sm sm:text-base">
                            ₹1000 for category toppers, trophies for the top 3
                          </span>
                        </div>
                        <div className="flex items-start text-gray-600">
                          <Briefcase className="h-5 w-5 mr-3 text-indigo-600 mt-1 flex-shrink-0" />
                          <span className="text-sm sm:text-base">
                            Hackathon & Recruitment: Annual event where
                            exceptional performers join the TIT Developer
                            Community
                          </span>
                        </div>
                      </div>

                      {/* Important Dates Section */}
                      <div className="mt-8 bg-gray-50 rounded-lg p-4">
                        <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                          Important Dates
                        </h5>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <Clock className="h-5 w-5 mr-3 text-indigo-600 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900 text-sm sm:text-base">
                                Registration Period
                              </p>
                              <p className="text-xs sm:text-sm text-gray-600">
                                March 15 - April 15, 2025
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Clock className="h-5 w-5 mr-3 text-indigo-600 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900 text-sm sm:text-base">
                                Round 1: MCQ
                              </p>
                              <p className="text-xs sm:text-sm text-gray-600">
                                April 20, 2025 (10:00 AM - 12:00 PM)
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Clock className="h-5 w-5 mr-3 text-indigo-600 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900 text-sm sm:text-base">
                                Round 2: Coding
                              </p>
                              <p className="text-xs sm:text-sm text-gray-600">
                                April 25, 2025 (2:00 PM - 5:00 PM)
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Clock className="h-5 w-5 mr-3 text-indigo-600 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900 text-sm sm:text-base">
                                Results & Awards
                              </p>
                              <p className="text-xs sm:text-sm text-gray-600">
                                May 1, 2025 (4:00 PM)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a
                        href="https://forms.gle/bBJDvi2adJCHePYB6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 w-full flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                      >
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
