import { Container } from "../container";
import { LinkFormSkeleton } from "./link-form-skeleton";
import { MainLayout } from "../main-layout";
import { PhoneSkeleton } from "./phone-skeleton";

export const LayoutLoading = () => {
  return (
    <MainLayout>
      <Container className="hidden place-items-center lg:grid">
        <PhoneSkeleton />
      </Container>
      <Container className="flex flex-col justify-between">
        <LinkFormSkeleton />
      </Container>
    </MainLayout>
  );
};
