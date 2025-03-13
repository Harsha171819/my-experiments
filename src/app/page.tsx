import React from "react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      {/* Header Navigation */}
      <nav className="w-full flex justify-between max-w-4xl mb-8">
        <h1 className="text-2xl font-bold">Personal Portfolio</h1>
        <ul className="flex gap-6">
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold">Hi, I'm Meesala Sriharsha</h2>
        <p className="text-lg text-gray-400 mt-2">Frontend Developer specializing in React & Next.js</p>
      </header>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl w-full mb-12">
        <h3 className="text-3xl font-semibold mb-4">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/video-cropper">
          <div className="p-4 bg-gray-800 rounded-lg text-center">
            <Image src="/project/idea.png" width={300} height={200} alt="Project 1" className="rounded-md mb-2" />
            <h4 className="text-xl font-semibold">Video Cropper</h4>
          </div>
          </Link>
          {/* // add more divs */}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl w-full mb-12">
        <h3 className="text-3xl font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-gray-800 rounded-lg">
            <Image src="/react.png" width={50} height={50} alt="React" className="mx-auto" />
            <p>React</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <Image src="/nextjs.png" width={50} height={50} alt="Next.js" className="mx-auto" />
            <p>Next.js</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <Image src="/typescript.png" width={50} height={50} alt="TypeScript" className="mx-auto" />
            <p>TypeScript</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <Image src="/tailwind.png" width={50} height={50} alt="Tailwind CSS" className="mx-auto" />
            <p>Tailwind CSS</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="max-w-4xl w-full mb-12 text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-400">Feel free to reach out via LinkedIn or GitHub!</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="https://linkedin.com/in/your-profile" target="_blank" className="text-blue-400">LinkedIn</Link>
          <Link href="https://github.com/your-profile" target="_blank" className="text-gray-400">GitHub</Link>
        </div>
      </section> */}
    </div>
  );
};

export default Home;