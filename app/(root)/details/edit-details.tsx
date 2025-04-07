"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@tanstack/react-form";
import Image from "next/image";
import { z } from "zod";

import uploadIcon from "@/public/assets/images/icon-upload-image.svg";
import { FieldInfo } from "@/components/field-info";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { insertDetails } from "@/app/actions/details";

const formSchema = z.object({
  avatar: z.instanceof(File),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
});

export const EditDetails = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm({
    defaultValues: {
      avatar: undefined as File | undefined,
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: ({ value }) => {
      startTransition(async () => {
        try {
          const formData = new FormData();
          formData.append("avatar", value.avatar as File);
          formData.append("firstName", value.firstName);
          formData.append("lastName", value.lastName);
          formData.append("email", value.email);

          await insertDetails(formData);
        } catch (error) {
          console.log(error);
        }
      });
    },
    validators: {
      onSubmit: formSchema,
    },
  });
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="mb-10">
          <h1 className="text-charcoal text-3xl font-bold">Profile Details</h1>
          <p className="text-grey-dark">
            Add your details to create a personal touch to your profile.
          </p>
        </div>
        <div className="space-y-6">
          <div className="bg-off-white rounded-md p-5">
            <Label className="group flex-col items-center gap-4 text-center lg:flex-row lg:text-left">
              <span className="text-grey-dark flex-1">Profile picture</span>
              <form.Field name="avatar">
                {(field) => (
                  <div className="relative overflow-hidden rounded-md">
                    <Input
                      type="file"
                      accept="image/png, image/jpeg"
                      className="h-[193px] w-[193px] text-transparent opacity-0"
                      onChange={(e) => field.setValue(e.target.files?.[0])}
                    />

                    <div className="bg-lavender/50 text-indigo absolute inset-0 grid place-content-center">
                      <Image src={uploadIcon} alt="" className="mx-auto" />
                      <p>+ Upload Image</p>
                    </div>

                    {field.state.value && (
                      <div className="text-indigo absolute inset-0 z-30 flex flex-col items-center justify-center rounded-md bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                        <Image src={uploadIcon} alt="" />
                        <p className="text-center text-sm text-white">
                          Change Image
                        </p>
                      </div>
                    )}

                    {/* preview the image if it exists */}
                    {field.state.value && (
                      <div className="absolute inset-0">
                        <Image
                          src={URL.createObjectURL(field.state.value)}
                          alt=""
                          className="h-full w-full object-cover"
                          width={193}
                          height={193}
                        />
                      </div>
                    )}
                  </div>
                )}
              </form.Field>
              <span className="text-grey-dark max-w-[215px] text-sm">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </span>
            </Label>
          </div>
          <div className="bg-off-white space-y-3 rounded-md p-5">
            <Label className="flex-col items-start gap-2 lg:flex-row">
              <span className="text-grey-dark flex-1">First Name*</span>
              <form.Field name="firstName">
                {(field) => (
                  <div className="w-full lg:max-w-[432px]">
                    <Input
                      type="text"
                      placeholder="e.g. John"
                      value={field.state.value}
                      onChange={(e) => field.setValue(e.target.value)}
                    />
                    <FieldInfo field={field} />
                  </div>
                )}
              </form.Field>
            </Label>

            <Label className="flex-col items-start gap-2 lg:flex-row">
              <span className="text-grey-dark flex-1">Last Name*</span>
              <form.Field name="lastName">
                {(field) => (
                  <div className="w-full lg:max-w-[432px]">
                    <Input
                      type="text"
                      placeholder="e.g. Appleseed"
                      value={field.state.value}
                      onChange={(e) => field.setValue(e.target.value)}
                    />
                    <FieldInfo field={field} />
                  </div>
                )}
              </form.Field>
            </Label>

            <Label className="flex-col items-start gap-2 lg:flex-row">
              <span className="text-grey-dark flex-1">Email Address*</span>
              <form.Field name="email">
                {(field) => (
                  <div className="w-full lg:max-w-[432px]">
                    <Input
                      type="email"
                      placeholder="e.g. email@example.com"
                      value={field.state.value}
                      onChange={(e) => field.setValue(e.target.value)}
                    />
                    <FieldInfo field={field} />
                  </div>
                )}
              </form.Field>
            </Label>
          </div>
        </div>
      </form>
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
