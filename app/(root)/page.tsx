import { Container } from "@/components/container";
import { MainLayout } from "@/components/main-layout";
import { AddLinks } from "./add-links";
import { PhonePreview } from "@/components/phone-preview";
import { fetchLinks } from "../actions/links";
import { fetchDetails } from "../actions/details";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const links = await fetchLinks();
  const details = await fetchDetails();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Must be authenticated.");
  }

  return (
    <MainLayout>
      <Container className="hidden place-items-center lg:grid">
        <PhonePreview links={links ?? []} details={details!} />
      </Container>
      <Container className="flex flex-col justify-between">
        <AddLinks links={links ?? []} userId={user.id} />
      </Container>
    </MainLayout>
  );
}
