import Image from "next/image";

import logo from "@/public/assets/images/logo-devlinks-large.svg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-off-white grid min-h-screen place-items-center">
      <div className="w-full max-w-[476px] space-y-12">
        <Image src={logo} alt="Logo" className="mx-auto" />

        {children}
      </div>
    </main>
  );
}
