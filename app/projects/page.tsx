import Image from "next/image";
import Link from "next/link";

export default function ProjectsIndex() {
  const projects: ProjectInfo[] = [
    {
      name: "CGT Calculator",
      description: "A Capital Gains Tax calculator for Australia",
      websiteLink: "https://www.cgt-calculator.com",
      imageLink: "/cgtCalc.png",
      imageAlt: "A screenshot of the website www.cgt-calculator.com",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      {projects.map((project) => (
        <div
          className="card card-compact bg-base-100 w-96 shadow-xl"
          key={project.websiteLink}
        >
          <figure>
            <Image
              src={project.imageLink}
              alt={project.imageAlt}
              width={300}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{project.name}</h2>
            <p>{project.description}</p>
            <div className="card-actions justify-end">
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit website
              </a>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
