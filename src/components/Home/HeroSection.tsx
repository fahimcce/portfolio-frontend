import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white sm:h-[100vh] h-[90vh] flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-8">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:max-w-lg">
          <p className="text-purple-400 font-semibold text-lg mb-2">
            Do You Know Me?
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            👋 I’m Fahim
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            In addition to all the branding and marketing features and benefits,
            my clients get to enjoy the advantages of a time-tested and refined
            workflow that is custom-tailored to each project!
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1NbnbP6sIW2vM97QXuQv_r0i5fo5i8j3B"
            download
          >
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition">
              Download Resume
            </button>
          </a>
        </div>

        {/* Right Content */}
        <div className="relative mt-12">
          <Image
            src="https://i.ibb.co/wC0kS0j/fahims.png"
            alt="Person"
            height={600}
            width={600}
            className=""
          />
          <div className="shodow-lg h-1 bg-white w-full "></div>
        </div>
      </div>
    </section>
  );
}
