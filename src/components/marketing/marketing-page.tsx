import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/landing/container";
import Heading from "@/components/landing/heading";
import SubHeading from "@/components/landing/subheading";
import { Button } from "@/components/landing/ui/button";
import { cn } from "@/lib/utils";
import type { MarketingAction, MarketingPageData } from "@/lib/marketing-pages";

const primaryActionClass =
  "border-foreground/15 bg-foreground/[0.045] text-foreground shadow-none ring-1 ring-inset ring-white/5 hover:border-foreground/25 hover:bg-foreground/[0.075] hover:text-foreground dark:border-white/15 dark:bg-white/[0.045] dark:hover:bg-white/[0.075]";

const secondaryActionClass =
  "border-foreground/10 bg-transparent text-foreground/85 shadow-none hover:border-foreground/20 hover:bg-foreground/[0.045] hover:text-foreground dark:border-white/10 dark:bg-transparent dark:hover:bg-white/[0.055]";

function PageAction({
  action,
  variant,
}: {
  action: MarketingAction;
  variant: "primary" | "secondary";
}) {
  const ActionIcon = action.icon ?? ArrowUpRight;

  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className={cn("w-full sm:w-fit", variant === "primary" ? primaryActionClass : secondaryActionClass)}
    >
      <Link
        href={action.href}
        target={action.external ? "_blank" : undefined}
        rel={action.external ? "noreferrer" : undefined}
      >
        {action.label}
        <ActionIcon className="size-4" />
      </Link>
    </Button>
  );
}

export default function MarketingPage({ page }: { page: MarketingPageData }) {
  return (
    <>
      <section className="border-b border-border/70">
        <Container>
          <div className="grid overflow-hidden md:border-x md:border-border/70 lg:min-h-[540px] lg:grid-cols-[minmax(0,1fr)_420px]">
            <div className="flex flex-col justify-center gap-8 border-b border-border/70 px-4 py-12 md:px-8 md:py-16 lg:border-b-0 lg:border-r lg:border-border/70 lg:px-10">
              <div className="flex w-fit items-center gap-2 rounded-md border border-foreground/10 bg-foreground/[0.035] px-3 py-1.5 font-mono text-xs text-muted-foreground dark:bg-white/[0.035]">
                <CheckCircle2 className="size-3.5 text-foreground" />
                {page.eyebrow}
              </div>

              <div className="max-w-3xl space-y-5">
                <Heading as="h1" variant="big" className="text-start">
                  {page.title}
                </Heading>
                <SubHeading variant="big" className="max-w-2xl">
                  {page.description}
                </SubHeading>
              </div>

              {(page.primaryAction || page.secondaryAction) && (
                <div className="flex flex-col gap-3 sm:flex-row">
                  {page.primaryAction && <PageAction action={page.primaryAction} variant="primary" />}
                  {page.secondaryAction && <PageAction action={page.secondaryAction} variant="secondary" />}
                </div>
              )}

              <div className="grid grid-cols-3 gap-px overflow-hidden border border-foreground/10 bg-border/70">
                {page.stats.map((stat) => (
                  <div key={stat.label} className="bg-background px-3 py-4">
                    <p className="font-orbitron text-lg font-semibold">{stat.value}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-muted/35 p-4 dark:bg-muted/20 md:p-6">
              <div
                className="absolute inset-0 opacity-45"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(120, 120, 120, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(120, 120, 120, 0.12) 1px, transparent 1px)",
                  backgroundSize: "34px 34px",
                }}
              />
              <div className="relative flex h-full flex-col justify-between border border-foreground/10 bg-background/80 p-4 backdrop-blur dark:bg-background/65">
                <div className="flex items-center justify-between border-b border-foreground/10 pb-3">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">Vengeance UI</p>
                    <p className="font-orbitron text-sm font-semibold">{page.eyebrow} page</p>
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground" />
                </div>

                <div className="py-6">
                  <div className="relative aspect-[1.75] overflow-hidden border border-foreground/10 bg-muted">
                    <Image
                      src="/og-image.png"
                      alt="Vengeance UI preview"
                      fill
                      sizes="(min-width: 1200px) 380px, 90vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="mt-4 divide-y divide-border/70 border border-border/70 bg-background/75">
                    {page.features.slice(0, 3).map((feature) => {
                      const FeatureIcon = feature.icon;

                      return (
                        <div
                          key={feature.title}
                          className="grid grid-cols-[32px_minmax(0,1fr)] items-center gap-3 p-3"
                        >
                          <div className="flex size-8 items-center justify-center border border-foreground/10 bg-muted/60">
                            <FeatureIcon className="size-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium">{feature.title}</p>
                            <p className="truncate text-xs text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-3 border-t border-foreground/10 pt-3 text-center font-mono text-[11px] text-muted-foreground">
                  <span>Route</span>
                  <span>Content</span>
                  <span>Ready</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/70">
        <Container>
          <div className="px-4 py-12 md:border-x md:border-border/70 md:px-8 md:py-16 lg:px-10">
            <div className="max-w-3xl space-y-3">
              <Heading as="h2" variant="medium">
                {page.featuresTitle}
              </Heading>
              <SubHeading>{page.featuresDescription}</SubHeading>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {page.features.map((feature) => {
                const FeatureIcon = feature.icon;

                return (
                  <div key={feature.title} className="border border-border/70 bg-card p-5">
                    <div className="flex size-10 items-center justify-center border border-foreground/10 bg-muted/60">
                      <FeatureIcon className="size-5" />
                    </div>
                    <h3 className="mt-5 font-orbitron text-base font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-8 px-4 py-12 md:border-x md:border-border/70 md:px-8 md:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-10">
            <div className="space-y-4">
              <Heading as="h2" variant="medium">
                {page.detailsTitle}
              </Heading>
              <SubHeading>{page.detailsDescription}</SubHeading>
              <div className="grid gap-3 pt-4">
                {page.details.map((detail) => (
                  <div key={detail.label} className="border border-border/70 bg-muted/25 p-4">
                    <p className="font-mono text-xs uppercase text-muted-foreground">{detail.label}</p>
                    <p className="mt-2 text-sm leading-relaxed">{detail.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border/70 bg-card p-5">
              <p className="font-orbitron text-base font-semibold">{page.timelineTitle}</p>
              <div className="mt-5 grid gap-4">
                {page.timeline.map((item, index) => (
                  <div key={item.label} className="grid grid-cols-[28px_minmax(0,1fr)] gap-3">
                    <div className="flex size-7 items-center justify-center border border-foreground/10 bg-muted font-mono text-[11px] text-muted-foreground">
                      {index + 1}
                    </div>
                    <div className="border-b border-border/70 pb-4 last:border-b-0 last:pb-0">
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
