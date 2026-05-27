import { CursorCard } from "@/components/ui/cursor-card";

export function CursorCardDemo() {
  return (
    <div className="flex w-full h-[600px] flex-col items-center justify-center">
      <div className="max-w-xl mx-auto p-8 leading-relaxed text-neutral-700 dark:text-neutral-300">
        <h1 className="text-4xl font-serif mb-6 text-neutral-900 dark:text-white">Vincent van Gogh</h1>
        <p>
          Vincent van Gogh, in full Vincent Willem van Gogh, (born March 30, 1853,{" "}
          <CursorCard
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/344846/500px-P1040705_copyGemeentehuis_Zundert.jpg"
            description="Zundert is a municipality and town in the south of the Netherlands, in the province of North Brabant."
          >
            Zundert, Netherlands
          </CursorCard>{" "}
          — died July 29, 1890, Auvers-sur-Oise, near{" "}
          <CursorCard
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/344846/eyfel-kulesi-paris.jpg"
            description="Paris is the capital and most populous city of France."
          >
            Paris, France
          </CursorCard>
          ), Dutch painter, generally considered the greatest after{" "}
          <CursorCard
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/344846/Rembrandt.jpg"
            description="Rembrandt Harmenszoon van Rijn (July 15, 1606 – October 4, 1669) was a Dutch draughtsman, painter and printmaker."
          >
            Rembrandt van Rijn
          </CursorCard>
          , and one of the greatest of the{" "}
          <CursorCard
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/344846/Vincent-van-Gogh-The-Starry-Night-1889-2.jpg"
            description="Post-Impressionism is an art movement that developed in the 1890s."
          >
            Post-Impressionists.
          </CursorCard>{" "}
          The striking colour, emphatic brushwork, and contoured forms of his work powerfully influenced the current of{" "}
          <CursorCard
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/344846/Screen%20Shot%202019-04-20%20at%2012.04.29.png"
            description="Expressionism is a modernist movement, initially in poetry and painting, originating in Germany at the beginning of the 20th century."
          >
            Expressionism
          </CursorCard>{" "}
          in modern art. Van Gogh’s art became astoundingly popular after his death, especially in the late 20th century,
          when his work sold for record-breaking sums at auctions around the world and was featured in blockbuster touring exhibitions.
        </p>
      </div>
    </div>
  );
}

export default CursorCardDemo;
