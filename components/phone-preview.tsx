import Image from "next/image";

import { SOCIALS } from "@/lib/constant";
import phone from "@/public/assets/images/illustration-phone-mockup.svg";
import { Links } from "@/lib/types";

type Props = {
  links: Links[];
};

export const PhonePreview = ({ links }: Props) => {
  // fetch only the socials that are in the links array
  const socials = SOCIALS.filter((social) =>
    links.some((link) => link.platform === social.name),
  ).map((social) => {
    const link = links.find((link) => link.platform === social.name);
    return {
      ...social,
      url: link?.url,
    };
  });

  return (
    <div className="relative mx-auto w-fit">
      <Image src={phone} alt="" />
      <div className="absolute top-16 right-5 left-5 z-10 grid px-3.5">
        <div className="mx-auto mb-4 aspect-square w-24 rounded-full bg-black" />
        <div className="bg-white px-4 text-center">
          <p className="text-lg font-semibold">Brian Millonte</p>
          <p className="text-grey-dark text-sm">millontebry@gmail.com</p>
        </div>
        <div className="mt-14.5 space-y-3">
          {socials.map((social) => (
            <div
              key={social.id}
              className="flex items-center gap-2 rounded-md px-4 py-3 shadow"
              style={{
                backgroundColor: social.bgColor,
                color: social.textColor,
              }}
            >
              <Image src={social.icon} alt="" />
              {social.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
