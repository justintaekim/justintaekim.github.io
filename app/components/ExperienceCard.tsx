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

export default function ExperienceCard({
  src,
  alt,
  company,
  title,
  date,
  description,
  bullets,
}: ExperienceCardProps) {
  return (
    <div className="flex items-center mb-6">
      <div className="pr-10">
        <Image
          src={src}
          alt={alt}
          width={150}
          height={150}
          className="rounded object-cover"
        />
      </div>

      <div className="w-full">
        <h3 className="text-xl font-semibold">{company}</h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg italic">{title}</p>
          </div>
          <p className="text-base text-right">{date}</p>
        </div>
        {description && <p>{description}</p>}
        {bullets && (
          <ul className="list-disc list-inside ml-4">
            {bullets.map((bullet, index) => (
              <li className="text-sm" key={index}>
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
