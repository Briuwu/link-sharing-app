import { Button } from "@/components/ui/button";
import { fetchLinks } from "../actions/links";
import { fetchDetails } from "../actions/details";
import Image from "next/image";
import { SOCIALS } from "@/lib/constant";
import { ShareLinkBtn } from "../(root)/details/share-link-btn";

export default async function PreviewPage() {
  const links = await fetchLinks();
  const details = await fetchDetails();

  // fetch only the socials that are in the links array
  const socials = SOCIALS.filter((social) =>
    links!.some((link) => link.platform === social.name),
  ).map((social) => {
    const link = links!.find((link) => link.platform === social.name);
    return {
      ...social,
      url: link?.url,
    };
  });
  return (
    <main className="relative p-6">
      <div className="bg-indigo absolute top-0 right-0 left-0 z-0 h-[357px] w-full rounded-b-4xl"></div>
      <header className="relative z-10 flex items-center justify-between rounded-md bg-white px-6 py-4">
        <Button className="border-indigo text-indigo" variant="outline">
          Back to Editor
        </Button>
        <ShareLinkBtn
          url={
            process.env.NODE_ENV === "production"
              ? `https://devlinks-uwu.vercel.app/preview/${details?.user_id}`
              : `http://localhost:3000/preview/${details?.user_id}`
          }
        />
      </header>
      <div className="relative z-10 mx-auto mt-28 max-w-[349px] rounded-xl bg-white px-14 py-12 shadow">
        <div className="bg-placeholder border-indigo relative mx-auto mb-6 aspect-square w-28 rounded-full border-4">
          {details?.avatar_url && (
            <Image
              src={details.avatar_url!}
              alt=""
              fill
              className="rounded-full object-cover"
            />
          )}
        </div>
        <div className="mb-14 space-y-2 text-center">
          <p className="text-3xl font-semibold">
            {details?.first_name} {details?.last_name}
          </p>
          <p className="text-grey-dark">{details?.email}</p>
        </div>
        <div className="space-y-3.5">
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
    </main>
  );
}
