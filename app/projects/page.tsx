import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function ProjectsIndex() {
  const projects: ProjectInfo[] = [
    {
      title: "CGT Calculator",
      description: "A Capital Gains Tax calculator for Australia",
      websiteLink: "https://www.cgt-calculator.com",
      imageLink: "/cgt-calc.jpg",
      imageAlt: "A screenshot of the website www.cgt-calculator.com",
    },
    {
      title: "BJJ Open Mat Finder",
      description:
        "A directory of BJJ Open Mats around the world to help you always find somewhere to roll",
      imageLink: "/bjj-open-mat-finder.jpg",
      imageAlt: "Two people rolling in a Brazilian Jiu Jitsu gym",
    },
  ];

  return (
    <main className="flex min-h-screen p-4 gap-4 flex-wrap justify-center">
      {projects.map((project) => (
        <Card key={project.title} className="w-72 h-fit">
          <CardHeader className="h-32">
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="h-64 p-4 relative">
            <div className="relative w-full h-full">
              <Image
                src={project.imageLink}
                alt={project.imageAlt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={!project.websiteLink}>
              {project.websiteLink ? (
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website
                </a>
              ) : (
                <span>Under construction</span>
              )}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </main>
  );
}
