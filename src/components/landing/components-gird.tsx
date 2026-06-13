import Container from "./container";
import LandingPageGrid from "./landing-page-grid";

export default function ComponentsGrid() {
  return (
    <section id="explore" className="border-b bg-background">
      <Container>
        <div className="overflow-hidden md:border-x">
          <LandingPageGrid />
        </div>
      </Container>
    </section>
  );
}
