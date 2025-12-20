import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
      <section className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-6">About HippieUp</h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-10">
          HippieUp is your personal travel diary in the cloud — a place where your 
          journeys live forever. Whether you're backpacking through mountains, 
          exploring hidden beaches, or documenting city adventures, HippieUp stores 
          your travel memories beautifully and securely.
        </p>
      </section>

      <section className="max-w-4xl grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">Track Your Adventures</h2>
          <p className="text-gray-600">
            Log every trip with photos, locations, notes, and tags. Build your 
            personal travel timeline effortlessly.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">Explore Your Journey Map</h2>
          <p className="text-gray-600">
            Visualize your travel footprint with an interactive world map that marks
            all your visited destinations.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">Relive Memories</h2>
          <p className="text-gray-600">
            Scroll through your personal timeline of experiences and relive every 
            story, big or small.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Why We Built HippieUp</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Travelers often capture beautiful moments but lose them in scattered 
          galleries, chats, or social media noise. HippieUp brings everything into 
          one calm, organized space designed purely for wanderers. It's more than a 
          log — it's your storybook.
        </p>
      </section>

      <footer className="mt-20 text-gray-500 text-sm">
        © {new Date().getFullYear()} HippieUp. Built with ❤️ for travelers.
      </footer>
    </div>
  );
}
