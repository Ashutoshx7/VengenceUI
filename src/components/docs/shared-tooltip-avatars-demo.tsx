import { SharedTooltipAvatars } from "@/components/ui/shared-tooltip-avatars";

const demoAvatars = [
  {
    id: "1",
    name: "Sarah Chen",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "3",
    name: "Emma Wilson",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "4",
    name: "David Park",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    image: "https://i.pravatar.cc/150?img=9",
  },
];

export function SharedTooltipAvatarsDemo() {
  return (
    <div className="flex w-full h-[300px] flex-col items-center justify-center">
      <SharedTooltipAvatars items={demoAvatars} />
    </div>
  );
}

export default SharedTooltipAvatarsDemo;
