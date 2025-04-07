import { fetchLinks } from "@/app/actions/links";
import { Container } from "@/components/container";
import { MainLayout } from "@/components/main-layout";
import { PhonePreview } from "@/components/phone-preview";
import { EditDetails } from "./edit-details";
import { fetchDetails } from "@/app/actions/details";

export default async function DetailsPage() {
  const links = await fetchLinks();
  const details = await fetchDetails();

  return (
    <MainLayout>
      <Container className="hidden place-items-center lg:grid">
        <PhonePreview links={links ?? []} details={details!} />
      </Container>
      <Container className="flex flex-col justify-between">
        <EditDetails />
      </Container>
    </MainLayout>
  );
}
