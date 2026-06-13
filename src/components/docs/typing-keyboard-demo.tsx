import { TypingKeyboard } from "@/components/ui/typing-keyboard";

export function TypingKeyboardDemo() {
  return (
    <div className="flex w-full h-[500px] items-center justify-center">
      <TypingKeyboard
        autoTypeText="Draco. Fast, private, and beautiful web browser. Built with love."
        typingSpeed={[50, 130]}
        scale={0.75}
      />
    </div>
  );
}

export default TypingKeyboardDemo;
