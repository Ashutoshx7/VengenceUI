import { ComponentShowcase } from "@/components/ui/component-showcase";
import MyAnimatedButton from "@/registry/my-animated-button";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ComponentShowcase 
        componentName="my-animated-button"
        title="Glowing Button"
        description="A physics-based hover button using Framer Motion."
      >
        <MyAnimatedButton />
      </ComponentShowcase>

      {/* Installation Steps */}
      <div className="mt-8 space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-white">Installation</h3>
        <p className="text-zinc-400">Copy and paste the code into your project or use the CLI.</p>
        <div className="bg-zinc-900 rounded-lg p-4 border border-white/10 flex items-center justify-between">
          <code className="text-sm text-zinc-300">npx vengenceui add my-animated-button</code>
        </div>
      </div>
    </div>
  );
}
