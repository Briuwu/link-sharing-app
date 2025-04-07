import Image from "next/image";

import { SOCIALS } from "@/lib/constant";
import phone from "@/public/assets/images/illustration-phone-mockup.svg";
import { Details, Links } from "@/lib/types";

type Props = {
  links: Links[];
  details: Details;
};

export const PhonePreview = ({ links, details }: Props) => {
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
      <div>
        <div className="bg-placeholder absolute top-16 right-0 left-0 mx-auto aspect-square w-24 rounded-full">
          {details?.avatar_url && (
            <Image
              src={details.avatar_url!}
              alt=""
              fill
              className="rounded-full object-cover"
            />
          )}
        </div>
        <div className="absolute top-44 right-5 left-5 space-y-1 bg-white text-center">
          <p className="text-lg font-semibold">
            {details?.first_name} {details?.last_name}
          </p>
          <p className="text-grey-dark text-sm">{details?.email}</p>
        </div>
        <div className="absolute top-[280px] right-8.5 left-8.5 space-y-3.5">
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
