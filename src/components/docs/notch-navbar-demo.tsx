import { NotchNavbar } from "@/components/ui/notch-navbar"

export function NotchNavbarDemo() {
  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 bg-zinc-900 dark:bg-white rounded-b-lg" />
      <NotchNavbar className="absolute top-0 inset-x-0 w-full" />
      <div className="text-center text-zinc-400 dark:text-zinc-500">
        <p>Check full view and resize to see the responsive navbar</p>
      </div>
    </div>
  )
}
