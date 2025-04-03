import { Container } from "@/components/container";
import { MainLayout } from "@/components/main-layout";
import { AddLinks } from "./add-links";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <MainLayout>
      <Container className="hidden lg:block">test</Container>
      <Container className="flex flex-col justify-between">
        <AddLinks />
        <div className="mt-6 border-t">
          <Button className="bg-indigo mt-4 w-full text-white">Save</Button>
        </div>
      </Container>
    </MainLayout>
  );
}
