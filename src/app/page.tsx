import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-12 md:p-24 selection:bg-zinc-800">
      
      {/* Massive Hero Section */}
      <div className="max-w-5xl mx-auto text-center mt-20">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-br from-white to-zinc-600 bg-clip-text text-transparent">
          Vengeance UI
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
          The ultimate collection of animated, copy-paste React components. Built for agencies, loved by developers.
        </p>

        <div className="flex items-center justify-center space-x-4">
          <Link 
            href="/components/my-animated-button" 
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
          >
            Browse Components
          </Link>
          <Link 
            href="https://github.com" 
            target="_blank"
            className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-full hover:bg-zinc-800 transition-colors"
          >
            View GitHub
          </Link>
        </div>
      </div>

    </main>
  );
}
