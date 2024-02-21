"use client"

import { useQuery } from "@tanstack/react-query";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React from "react";

import { Button } from "@/components/Button";
import { Friends } from "@/components/Friends";
import { LogoWithText } from "@/components/Logo/LogoWithText";
import { SearchIcon } from "@/components/SearchIcon";
import { Select, SelectItem } from "@/components/Select";
import { getOrgsLocations } from "@/services/orgs";
import { z } from 'zod';
import { useRouter } from "next/navigation";
import { queryClient } from "@/services/queryClient";
import { getPets } from "@/services/pets";

const searchPetsByRegionSchema = z.object({
  state: z.string(),
  city: z.string()
})

type SearchPetsByRegionSchema = z.infer<typeof searchPetsByRegionSchema>

export default function Home() {
  const router = useRouter()

  const { data: orgsLocations } = useQuery({
    queryKey: ['org-locations'],
    queryFn: getOrgsLocations
  })

  const [selectedState, setSelectedState] = React.useState<string>(orgsLocations?.[0].name ?? 'SP');
  const cities = orgsLocations?.filter((state) => state.name === selectedState)
  .flatMap((state) => state.cities.map((city) => city)) ?? []
  
  const { register, handleSubmit, setValue } = useForm<SearchPetsByRegionSchema>({ 
    resolver: zodResolver(searchPetsByRegionSchema),
    defaultValues: {
      state: selectedState
    }
  })  

  async function searchPetsByRegion(data: SearchPetsByRegionSchema) {
    const { state, city } = data 

    const params = new URLSearchParams()

    Object.entries(data).forEach(([key, value]) => {
      params.set(key, encodeURIComponent(value));
    });
    
    router.push('/pets'+ '?' + params)

    await queryClient.prefetchQuery({
      queryKey: [`pets-${state}-${city}`],
      queryFn: () => getPets({ state, city }),
    })
  }

  return (
    <main className="w-full h-screen p-36 flex flex-col bg-coral-500 text-white">
      <header className="w-full">
        <LogoWithText />
      </header>

      <section className="w-full flex flex-row justify-between items-end mt-3">
        <p className="w-[487px] text-7xl font-extrabold">
          Leve a felicidade para o seu lar
        </p>
        <Friends />
      </section>

      <section className="flex flex-row justify-between mt-32">
        <p className="w-[407px] text-2xl font-semibold">
          Encontre o animal de estimação ideal para seu estilo de vida!
        </p>

        <div className="flex flex-row items-center gap-4">
          <Select
            {...register("state")}
            placeholder="Estado"
            label="Busque um amigo:"
            value={selectedState}
            variant="outlined-white"
            size="xs"
            onChangeValue={(value) => {
              setValue("state", value);
              setSelectedState(value);
            }}
          >
            {orgsLocations &&
              orgsLocations.map((state, index) => (
                <SelectItem key={index} value={state.name}>
                  {state.name}
                </SelectItem>
              ))}
          </Select>

          <Select
            placeholder="Selecione uma Cidade"
            name="city"
            onChangeValue={(value) => {
              setValue("city", value);
            }}
          >
            {cities.map((city) => (
              <SelectItem key={city.name} value={city.name}>
                {city.name}
              </SelectItem>
            ))}
          </Select>

          <Button
            onClick={handleSubmit(searchPetsByRegion)}
            type="submit"
            Icon={<SearchIcon />}
            classValue="h-16 w-16"
          />
        </div>
      </section>
    </main>
  );
}
