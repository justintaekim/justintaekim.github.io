import React, { useState } from "react";
import Image from "next/image";

interface ExperienceCardProps {
  src: string;
  alt: string;
  company: string;
  title: string;
  date: string;
  description?: string;
  bullets?: string[];
}

const ExperienceCard = ({
  src,
  alt,
  company,
  title,
  date,
  description,
  bullets,
}: ExperienceCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-64 h-80 perspective cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full bg-white shadow-lg rounded-lg backface-hidden flex flex-col items-center justify-center p-4">
          <Image
            src={src}
            alt={alt}
            width={150}
            height={150}
            className="rounded object-cover mb-4"
          />
          <h3 className="text-lg font-semibold">{company}</h3>
          <p className="text-base italic">{title}</p>
          <p className="text-small">{date}</p>
        </div>
        <div className="absolute w-full h-full bg-gray-800 text-white shadow-lg rounded-lg backface-hidden transform rotate-y-180 flex flex-col items-center justify-center p-4">
          <h2 className="text-lg text-center font-bold">
            <strong>{company}</strong>
          </h2>
          <h3 className="text-base text-center italic">{title}</h3>
          <h4 className="text-small">{date}</h4>
          {description && <p className="mt-2 text-center">{description}</p>}
          {bullets && (
            <ul className="list-disc list-inside ml-4 mt-2">
              {bullets.map((bullet, index) => (
                <li className="text-sm" key={index}>
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
