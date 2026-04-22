import { cn } from "@/lib/utils";
import * as React from "react";

export default function MotionIcon({
  className,
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 34 12"
      className={cn("h-full w-full bg-[#FEF62A] p-0.5 rounded-sm", className)}
      fill="yellow"
    >
      <path
        d="M 12.838 0 L 6.12 11.989 L 0 11.989 L 5.245 2.628 C 6.059 1.176 8.088 0 9.778 0 Z M 27.846 2.997 C 27.846 1.342 29.216 0 30.906 0 C 32.596 0 33.966 1.342 33.966 2.997 C 33.966 4.653 32.596 5.995 30.906 5.995 C 29.216 5.995 27.846 4.653 27.846 2.997 Z M 13.985 0 L 20.105 0 L 13.387 11.989 L 7.267 11.989 Z M 21.214 0 L 27.334 0 L 22.088 9.362 C 21.275 10.813 19.246 11.989 17.556 11.989 L 14.496 11.989 Z"
        fill="#0b1012"
      ></path>
    </svg>
  );
}