"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import emptyStateImg from "@/public/assets/images/illustration-empty.svg";
import { useForm } from "@tanstack/react-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import dragIcon from "@/public/assets/images/icon-drag-and-drop.svg";
import { Label } from "@/components/ui/label";
import { SOCIALS } from "@/lib/constant";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { FieldInfo } from "@/components/field-info";
import { deleteLink, insertLinks } from "../actions/links";
import { Links } from "@/lib/types";
import { useTransition } from "react";

const formSchema = z.object({
  links: z
    .array(
      z.object({
        platform: z.string().min(1, "platform is required"),
        url: z
          .string()
          .min(1, "link is required")
          .url({ message: "must be a url" }),
      }),
    )
    .min(1, "at least one link is required"),
});

type Props = {
  links: Links[];
};

export const AddLinks = ({ links }: Props) => {
  const defaultValues = links.map((link) => ({
    platform: link.platform,
    url: link.url,
  }));
  const [isPending, startTransition] = useTransition();
  const form = useForm({
    defaultValues: {
      links: defaultValues ?? ([] as { platform: string; url: string }[]),
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: ({ value }) => {
      startTransition(async () => {
        try {
          await insertLinks(value.links);
          form.reset();
        } catch (error) {
          console.error(error);
        }
      });
    },
  });
  return (
    <>
      <div>
        <div className="mb-10">
          <h1 className="text-charcoal text-2xl font-bold">
            Customize your links
          </h1>
          <p className="text-grey-dark">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <Button
          onClick={() => {
            form.pushFieldValue("links", {
              platform: "",
              url: "",
            });
          }}
          variant="outline"
          className="text-indigo border-indigo w-full"
        >
          + Add New Link
        </Button>
        <div className="mt-6">
          <form
            className="space-y-6 overflow-auto lg:max-h-[60vh]"
            onSubmit={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <form.Field name="links" mode="array">
              {(field) =>
                field.state.value.length > 0 ? (
                  field.state.value.map((_, index) => (
                    <div
                      key={index}
                      className="bg-off-white space-y-3 rounded-md p-5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image src={dragIcon} alt="" />
                          <p className="text-grey-dark font-bold">
                            Link #{index + 1}
                          </p>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => {
                            startTransition(async () => {
                              await deleteLink(links[index].id);
                              field.removeValue(index);
                            });
                          }}
                          className="text-grey-dark"
                        >
                          Remove
                        </Button>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label className="text-charcoal text-xs">
                          Platform
                        </Label>
                        <form.Field
                          key={index}
                          name={`links[${index}].platform`}
                        >
                          {(subField) => (
                            <>
                              <Select
                                onValueChange={subField.handleChange}
                                value={subField.state.value}
                              >
                                <SelectTrigger
                                  className="w-full"
                                  disabled={isPending}
                                >
                                  <SelectValue placeholder="Select a platform..." />
                                </SelectTrigger>
                                <SelectContent>
                                  {SOCIALS.map(({ name, icon }) => (
                                    <SelectItem value={name} key={name}>
                                      <Image src={icon} alt="" />
                                      {name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FieldInfo field={subField} />
                            </>
                          )}
                        </form.Field>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label className="text-charcoal text-xs">Link</Label>
                        <form.Field key={index} name={`links[${index}].url`}>
                          {(subField) => (
                            <>
                              <Input
                                disabled={isPending}
                                value={subField.state.value}
                                onChange={(e) =>
                                  subField.handleChange(e.target.value)
                                }
                                placeholder="e.g. https://www.github.com/briuwu"
                              />
                              <FieldInfo field={subField} />
                            </>
                          )}
                        </form.Field>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="space-y-6 text-center">
                    <FieldInfo field={field} />
                    <Image src={emptyStateImg} alt="" className="mx-auto" />
                    <p className="text-charcoal text-2xl font-bold">
                      Let&apos;s get you started
                    </p>
                    <p className="text-grey-dark">
                      Use the “Add new link” button to get started. Once you
                      have more than one link, you can reorder and edit them.
                      We’re here to help you share your profiles with everyone!
                    </p>
                  </div>
                )
              }
            </form.Field>
          </form>
        </div>
      </div>
      <div className="mt-6 border-t">
        <Button
          disabled={isPending}
          onClick={() => form.handleSubmit()}
          className="bg-indigo mt-4 w-full text-white"
        >
          Save
        </Button>
      </div>
    </>
  );
};
