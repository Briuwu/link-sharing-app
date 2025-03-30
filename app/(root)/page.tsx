import { Container } from "@/components/container";
import { MainLayout } from "@/components/main-layout";
import { AddLinks } from "./add-links";

export default function Home() {
  return (
    <MainLayout>
      <Container className="hidden lg:block">test</Container>
      <Container>
        <AddLinks />
      </Container>
    </MainLayout>
  );
}
