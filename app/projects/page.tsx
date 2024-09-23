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
      imageLink: "/cgtCalc.png",
      imageAlt: "A screenshot of the website www.cgt-calculator.com",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      {projects.map((project) => (
        <Card>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={project.imageLink}
              alt={project.imageAlt}
              width={300}
              height={200}
            />
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit website
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </main>
  );
}
