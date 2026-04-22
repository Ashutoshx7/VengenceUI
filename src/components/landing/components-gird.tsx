import Container from "./container";
import LandingPageGrid from "./landing-page-grid";

export default function ComponentsGrid() {
    return (
        <section className="border-b">
            <Container>
                <div className="p-4 md:border-x">
                    <LandingPageGrid />
                </div>
            </Container>
        </section>
    )
}