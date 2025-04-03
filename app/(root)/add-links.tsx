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

export const AddLinks = () => {
  // const { links } = useLinksStore((state) => state);
  const form = useForm({
    defaultValues: {
      links: [] as { name: string; url: string }[],
    },
  });
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-charcoal text-2xl font-bold">
          Customize your links
        </h1>
        <p className="text-grey-dark">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <Button
        onClick={() => {
          form.pushFieldValue("links", {
            name: "",
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
          className="max-h-[350px] space-y-6 overflow-auto"
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
                        onClick={() => field.removeValue(index)}
                        className="text-grey-dark"
                      >
                        Remove
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-charcoal text-xs">Platform</Label>
                      <form.Field key={index} name={`links[${index}].name`}>
                        {(subField) => (
                          <Select
                            onValueChange={subField.handleChange}
                            value={subField.state.value}
                          >
                            <SelectTrigger className="w-full">
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
                        )}
                      </form.Field>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-charcoal text-xs">Link</Label>
                      <form.Field key={index} name={`links[${index}].url`}>
                        {(subField) => (
                          <Input
                            value={subField.state.value}
                            onChange={(e) =>
                              subField.handleChange(e.target.value)
                            }
                            placeholder="e.g. https://www.github.com/briuwu"
                          />
                        )}
                      </form.Field>
                    </div>
                  </div>
                ))
              ) : (
                <div className="space-y-6 text-center">
                  <Image src={emptyStateImg} alt="" className="mx-auto" />
                  <p className="text-charcoal text-2xl font-bold">
                    Let&apos;s get you started
                  </p>
                  <p className="text-grey-dark">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </p>
                </div>
              )
            }
          </form.Field>
        </form>
      </div>
    </div>
  );
};
