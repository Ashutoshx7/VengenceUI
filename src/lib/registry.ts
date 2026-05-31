export type PackageManager = "npm" | "pnpm" | "bun" | "yarn";

export const REGISTRY_BASE_URL = "https://vengeance-ui-v2.vercel.app/r";

export const PACKAGE_MANAGER_EXECUTORS: Record<PackageManager, string> = {
  npm: "npx",
  pnpm: "pnpm dlx",
  bun: "bunx",
  yarn: "yarn dlx",
};

export function getRegistryItemUrl(componentName: string) {
  return `${REGISTRY_BASE_URL}/${componentName}.json`;
}

export function getShadcnAddCommand(componentName: string, packageManager: PackageManager = "npm") {
  return `${PACKAGE_MANAGER_EXECUTORS[packageManager]} shadcn@latest add ${getRegistryItemUrl(componentName)}`;
}
