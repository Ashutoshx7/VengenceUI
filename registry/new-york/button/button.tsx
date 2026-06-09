import { Button } from "@/components/ui/button"

export default function Button1() {
  return (
    <div className="flex gap-2">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}
