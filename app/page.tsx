/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Hi, I'm Perry</h1>
      <Image
        src="/perry.png"
        alt="Perry's profile picture"
        width={200}
        height={200}
        className="rounded-full pb-6"
      />
      <p className="text-lg mb-6">I'm a software engineer and CPA.</p>
      <p>
        I'm currently on hiatus from my day-job to travel the world, build side
        projects and get my ass kicked at BJJ.
      </p>
    </main>
  );
}
