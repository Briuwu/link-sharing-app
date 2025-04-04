import { Container } from "@/components/container";
import { MainLayout } from "@/components/main-layout";
import { AddLinks } from "./add-links";
import { PhonePreview } from "@/components/phone-preview";
import { fetchLinksById } from "../actions/links";

export default async function Home() {
  const links = await fetchLinksById();

  return (
    <MainLayout>
      <Container className="hidden lg:block">
        <PhonePreview links={links ?? []} />
      </Container>
      <Container className="flex flex-col justify-between">
        <AddLinks links={links ?? []} />
      </Container>
    </MainLayout>
  );
}
