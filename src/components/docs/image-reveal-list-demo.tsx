import { ImageRevealList, ImageRevealListItem } from "@/components/ui/image-reveal-list";

const demoItems: ImageRevealListItem[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    subtitle: "F. Scott Fitzgerald",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=280&fit=crop",
    number: "01",
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    subtitle: "Harper Lee",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&h=280&fit=crop",
    number: "02",
  },
  {
    id: "3",
    title: "1984",
    subtitle: "George Orwell",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=280&fit=crop",
    number: "03",
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    subtitle: "Jane Austen",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=200&h=280&fit=crop",
    number: "04",
  },
];

export function ImageRevealListDemo() {
  return (
    <div className="w-full min-h-[500px] flex flex-col items-center justify-center relative p-8 overflow-hidden">
      {/* Subtle grid background to match the original design */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* For dark mode grid variant */}
      <div 
        className="absolute inset-0 pointer-events-none hidden dark:block opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 w-full max-w-[500px] flex flex-col items-center">
        <ImageRevealList items={demoItems} className="mb-8 pl-[100px] sm:pl-0" />
      </div>
    </div>
  );
}

export default ImageRevealListDemo;
