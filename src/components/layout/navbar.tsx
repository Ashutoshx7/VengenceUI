import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-black/50 backdrop-blur-md">
      <div className="container mx-auto flex h-14 max-w-7xl items-center px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg text-neutral-900 dark:text-white tracking-tighter">Vengeance UI</span>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search goes here later */}
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="https://github.com" target="_blank" className="text-neutral-400 dark:text-zinc-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.06c3-.36 6-2 6-5.24a4.31 4.31 0 0 0-1.2-3.08 4 4 0 0 0-.08-3.2s-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C5.3 2 4.3 2 4.3 2a4 4 0 0 0-.08 3.2A4.31 4.31 0 0 0 3 8.24c0 3.24 3 4.88 6 5.24A4.8 4.8 0 0 0 8 18v4"></path>
              </svg>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-neutral-400 dark:text-zinc-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
