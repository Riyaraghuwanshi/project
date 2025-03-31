import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const images = [
  {
    url: "/photogallery/gallery7.JPG",
    title: "Event Architects",
  },
  {
    url: "/photogallery/gallery8.JPG",
    title: "Achievers",
  },
  {
    url: "/photogallery/gellery2.jpg",
    title: "Momentum Makers",
  },
  {
    url: "/photogallery/gallery1.png",
    title: "Virtul Connect",
  },

  {
    url: "/photogallery/gallery3.png",
    title: "Stream Talk",
  },
  {
    url: "/photogallery/gallery5.png",
    title: "Carve Design",
  },
  {
    url: "/photogallery/gallery12.JPG",
    title: "Impact Squad",
  },

  {
    url: "/photogallery/gallery13.JPG",
    title: "Honor Guest",
  },

  {
    url: "/photogallery/gallery9.JPG",
    title: "Guidance Core",
  },
  {
    url: "/photogallery/gallery6.png",
    title: "Zoom Inspire",
  },

  {
    url: "/photogallery/gallery14.JPG",
    title: "Winning Icon",
  },
];

const faqs = [
  {
    question: "What technologies do you use in your workshops?",
    answer:
      "Our workshops cover a wide range of modern technologies including React, Node.js, TypeScript, and various cloud platforms. We constantly update our curriculum to reflect industry standards and emerging technologies.",
  },
  {
    question: "How often do you organize hackathons?",
    answer:
      "We organize major hackathons quarterly, with smaller coding challenges and mini-hackathons occurring monthly. These events are designed to challenge participants and foster innovation.",
  },
  {
    question: "Can beginners join your coding sessions?",
    answer:
      "Absolutely! We welcome developers of all skill levels. Our coding sessions are structured to accommodate both beginners and experienced developers, with mentors available to provide guidance.",
  },
  {
    question: "What makes your team meetings unique?",
    answer:
      "Our team meetings combine strategic planning with hands-on coding sessions. We believe in practical application alongside theoretical discussion, making each meeting both productive and educational.",
  },
];

const FAQ = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gallery Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Photo Gallery
            </h2>
            {/* <p className="mt-4 text-xl text-gray-600">
              Capturing our journey and memorable moments
            </p> */}
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div
                key={image.url}
                className="group relative aspect-w-3 aspect-h-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-semibold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to know about our programs and events
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
