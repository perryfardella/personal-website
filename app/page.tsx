/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold mb-6">Hi, I'm Perry</h1>
      <Image
        src="/perry.png"
        alt="Perry's profile picture"
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="text-lg mb-6">I'm a software engineer and CPA</p>
      <p>I recently took indefinite hiatus my job to work on startups</p>
      <p>
        Here you'll find a list of the startups I've built, as well as some long
        and short form thoughts
      </p>
    </main>
  );
}
