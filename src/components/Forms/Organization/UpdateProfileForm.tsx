"use client"

import { Organization } from "@/@types/Organzation";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { TextArea } from "@/components/TextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const updateProfileSchema = z.object({
  name: z.string().nullable(),
  description: z.string(),
  address: z.string(),
  address_number: z.string(),
  address_complement: z.string(),
  zip_code: z.string(),
  city: z.string(),
  state: z.string(),
  responsable_name: z.string(),
  email: z.string(),
});

type UpdateProfileData = z.infer<typeof updateProfileSchema>;


interface UpdateProfileForm { 
  organization: Organization | null
}

export function UpdateProfileForm(props: UpdateProfileForm) {
  const { organization } = props

  const [isEditting, setIsEdditing] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    setFocus,
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: organization?.name,
      email: organization?.email,
      description: organization?.description,
      responsable_name: organization?.responsible_name,
      city: organization?.city,
      state: organization?.state,
      address: organization?.address,
      address_number: organization?.address_number,
      address_complement: organization?.address_complement,
      zip_code: organization?.zip_code,
    },
  });

  return (
    <>
      <div className="w-[700px] px-20 py-6 flex flex-row items-center justify-between bg-navy-900 rounded-2xl text-white">
        <div className="h-16 w-16 flex items-center justify-center mr-auto bg-[#F27006] rounded-2xl p-5">
          <Logo />
        </div>
        <div className="flex flex-col">
          <p className="text-3xl font-bold">{organization?.name}</p>
          <p className="text-base font-medium">
            {`${organization?.address} - ${organization?.address_number}, ${organization?.zip_code} `}
          </p>
          <p>{`${organization?.city} - ${organization?.state}`}</p>
        </div>

        <button
          onClick={() => setIsEdditing((prev) => !prev)}
          className={`h-16 w-16 flex items-center justify-center ml-auto rounded-2xl ${
            isEditting ? "bg-mustard-400" : "bg-[#114A80]"
          } `}
        >
          <Edit />
        </button>
      </div>

      <div className="w-[700px] p-20 pt-8 flex flex-col bg-white text-navy-900 rounded-2xl my-10">
        <p className="text-4xl font-extrabold">Dados da Organização</p>

        <hr className="mt-5 mb-10 border-spacing-1.5 border-black/5" />

        <form className="flex flex-col gap-6">
          <Input {...register("name")} name="nome" type="text" label="Nome" />

          <TextArea
            {...register("description")}
            name="description"
            label="Descrição"
          />

          {isEditting && (
            <button className="py-4 rounded-2xl text-lg font-bold bg-mustard-400">
              Salvar
            </button>
          )}
        </form>
      </div>
    </>
  );
}
