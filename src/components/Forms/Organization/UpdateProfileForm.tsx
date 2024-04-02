"use client"

import { Organization } from "@/@types/Organzation";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit, X } from "lucide-react";
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
    <div className="w-[700px] p-20 pt-8 flex flex-col bg-white text-navy-900 rounded-2xl my-10">
      <div className="flex flex-row items-center gap-2 text-4xl font-extrabold">
        <p>Dados da Organização</p>
        <button
          onClick={() => setIsEdditing((prev) => !prev)}
          className={`${isEditting ? "text-coral-500" : "text-navy-900"}`}
        >
          {isEditting ? <X /> : <Edit />}
        </button>
      </div>

      <hr className="mt-5 mb-10 border-spacing-1.5 border-black/5" />

      <form className="flex flex-col gap-6">
        <Input {...register("name")} error={errors.name} disabled={!isEditting} type="text" label="Nome" />

        <TextArea
          {...register("description")}
          disabled={!isEditting} 
          name="description"
          label="Descrição"
        />

        <Input
          {...register("responsable_name")}
          disabled={!isEditting} 
          error={errors.responsable_name}
          type="text"
          label="Nome do Responsável"
        />

        <Input {...register("email")} disabled={!isEditting} error={errors.email} type="email" label="E-mail" />
 
        <hr className="my-5 border-spacing-1.5 border-black/5" />

        <p className="text-xl font-extrabold">Endereço</p>

        <div className="flex flex-row gap-2">
          <Input {...register("address")} disabled={!isEditting} error={errors.address} type="text" label="Rua" />
          <div className="w-28">
          <Input {...register("address_number")} disabled={!isEditting} error={errors.address_number} type="number" label="Número" />
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <Input {...register("city")} disabled={!isEditting} error={errors.city} type="text" label="Cidade" />
          <div className="w-20">
            <Input {...register("state")} disabled={!isEditting} error={errors.state} type="text" label="Estado" />
          </div>
          <div className="w-48">
          <Input {...register("zip_code")} disabled={!isEditting} error={errors.zip_code} type="text" label="CEP" />
          </div>
        </div>

        <Input
          {...register("address_complement")}
          disabled={!isEditting} 
          type="text"
          label="Complemento"
        />

        {isEditting && (
          <button type="submit" disabled={!isDirty || isSubmitting} className="py-4 rounded-2xl text-lg font-bold bg-mustard-400">
            {isSubmitting ?  'Enviando' : 'Salvar'}
          </button>
        )}
      </form>
    </div>
  );
}
