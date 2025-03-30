"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import logoDesktop from "@/public/assets/images/logo-devlinks-large.svg";
import logoMobile from "@/public/assets/images/logo-devlinks-small.svg";

import linkIcon from "@/public/assets/images/icon-link.svg";
import detailIcon from "@/public/assets/images/icon-profile-details-header.svg";

import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="mb-0 flex items-center justify-between rounded-xl bg-white px-6 py-4 md:m-6">
      <Image src={logoDesktop} alt="Logo" className="hidden md:block" />
      <Image src={logoMobile} alt="Logo" className="block md:hidden" />
      <ul className="flex items-center md:gap-4">
        <li>
          <Button
            asChild
            variant="link"
            className={cn(
              "text-grey-dark text-sm font-semibold",
              pathname === "/" && "text-indigo bg-mauve",
            )}
          >
            <Link href="/">
              <Image src={linkIcon} alt="" />
              <span className="hidden md:block">Links</span>
            </Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            variant="link"
            className={cn(
              "text-grey-dark text-sm font-semibold",
              pathname === "/details" && "text-indigo",
            )}
          >
            <Link href="/details">
              <Image src={detailIcon} alt="" />
              <span className="hidden md:block">Profile Details</span>
            </Link>
          </Button>
        </li>
      </ul>
      <Button asChild variant="outline" className="text-indigo border-indigo">
        <Link href="/preview">Preview</Link>
      </Button>
    </header>
  );
};
