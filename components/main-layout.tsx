export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="m-4 grid gap-6 md:m-6 lg:min-h-[calc(100dvh-142px)] lg:grid-cols-[.75fr_1fr]">
      {children}
    </main>
  );
};
