import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="prose">
      <h1>Welcome to my site</h1>
      <p className="text-base-content">This text should change color with the theme.</p>
      <button className="btn btn-primary">Primary Button</button>
    </div>
    </main>
  );
}
