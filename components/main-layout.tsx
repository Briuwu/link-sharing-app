export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="m-4 grid min-h-dvh gap-6 md:m-6 lg:grid-cols-[.75fr_1fr]">
      {children}
    </main>
  );
};
