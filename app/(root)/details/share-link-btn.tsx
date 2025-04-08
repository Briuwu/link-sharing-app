"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const ShareLinkBtn = ({ url }: { url: string }) => {
  return (
    <Button
      onClick={() => {
        window.navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
      }}
      className="bg-indigo text-white"
    >
      Share Link
    </Button>
  );
};
