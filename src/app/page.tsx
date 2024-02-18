"use client"

import { Button } from "@/components/Button";
import { Friends } from "@/components/Friends";
import { LogoWithText } from "@/components/Logo/LogoWithText";
import { SearchIcon } from "@/components/SearchIcon";
import { Select, SelectItem } from "@/components/Select";
import { getOrgsLocations } from "@/services/orgs";
import { useQuery } from "@tanstack/react-query";
import React from "react";


export default function Home() {
  const { data: orgsLocations, isLoading } = useQuery({
    queryKey: ['org-locations'],
    queryFn: getOrgsLocations
  })

  const [selectedState, setSelectedState] = React.useState<string>(orgsLocations?.[0].name ?? 'SP');
  
  const cities = orgsLocations?.filter((state) => state.name === selectedState)
    .flatMap((state) => state.cities.map((city) => city)) ?? []

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
            placeholder="Estado"
            label="Busque um amigo:"
            value={selectedState}
            variant="outlined-white"
            size="xs"
            onValueChange={(e) => setSelectedState(e)}
          >
            {orgsLocations && orgsLocations.map((state, index) => (
              <SelectItem key={index} value={state.name}>
                {state.name}
              </SelectItem>
            ))}
          </Select>

          <Select placeholder="Selecione uma Cidade">
            {cities.map((city) => (
              <SelectItem key={city.name} value={city.name}>
                {city.name}
              </SelectItem>
            ))}
          </Select>

          <Button Icon={<SearchIcon />} classValue="h-16 w-16"/>
        </div>
      </section>
    </main>
  );
}
