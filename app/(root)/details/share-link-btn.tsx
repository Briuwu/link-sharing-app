"use client";

import { Button } from "@/components/ui/button";

export const ShareLinkBtn = ({ url }: { url: string }) => {
  return (
    <Button
      onClick={() => navigator.clipboard.writeText(url)}
      className="bg-indigo text-white"
    >
      Share Link
    </Button>
  );
};
