"use client"

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { PetCard } from "@/components/PetCard";
import { SearchIcon } from "@/components/SearchIcon";
import { Select, SelectItem } from "@/components/Select";
import { getOrgsLocations } from "@/services/orgs";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const pets = [
  { id: 1, name: "Alfredo", photo: "alfredo.png" },
  { id: 2, name: "Francis", photo: "francis.png" },
  { id: 3, name: "Jameson", photo: "jameson.png" },
  { id: 4, name: "Lauren", photo: "lauren.png" },
  { id: 4, name: "Panqueca", photo: "panqueca.png" },
];

export default function Pets() {
  const { data: orgsLocations, isLoading } = useQuery({
    queryKey: ['org-locations'],
    queryFn: getOrgsLocations
  })

  const [selectedState, setSelectedState] = React.useState<string>(orgsLocations?.[0].name ?? 'SP');
  
  const cities = orgsLocations?.filter((state) => state.name === selectedState)
    .flatMap((state) => state.cities.map((city) => city)) ?? []

  return (
    <main className="w-full h-screen flex flex-row bg-gray-50">
      <section className="h-full flex flex-col gap-7 bg-coral-700 text-white">
        <header className="px-14 pt-20">
          <Logo />

          <div className="flex flex-row items-center justify-between gap-4 mt-6">
            <Select
              placeholder="Estado"
              defaultValue={selectedState}
              variant="outlined-light"
              size="xs"
              onValueChange={(e) => setSelectedState(e)}
            >
              {orgsLocations && orgsLocations.map((state, index) => (
                <SelectItem key={index} value={state.name}>
                  {state.name}
                </SelectItem>
              ))}
            </Select>

            <Select
              placeholder="Selecione uma Cidade"
              variant="outlined-light"
              justifyTrigger="between"
              size="sm"
            >
              {cities.map((city, index) => (
                <SelectItem key={index} value={city.name}>
                  {city.name}
                </SelectItem>
              ))}
            </Select>

            <Button Icon={<SearchIcon />}  classValue="h-14 w-14" />
          </div>
        </header>

        <div className="h-full px-14 py-10 row-span-2 bg-coral-500">
          <p className="text-xl font-extrabold">Filtros</p>

          <div className="w-full flex flex-col mt-6 gap-7">
            <Select
              placeholder="Selecione a idade"
              label="Idade"
              flex="col"
              justifyTrigger="between"
              size="xl"
              variant="filed-light-coral"
            >
              <SelectItem value="Filhote">Filhote</SelectItem>
            </Select>
            <Select
              placeholder="Selecione a idade"
              label="Nível de Energia"
              flex="col"
              justifyTrigger="between"
              size="xl"
              variant="filed-light-coral"
            >
              <SelectItem value="Filhote">Filhote</SelectItem>
            </Select>
            <Select
              placeholder="Selecione a idade"
              label="Porte do animal"
              flex="col"
              justifyTrigger="between"
              size="xl"
              variant="filed-light-coral"
            >
              <SelectItem value="Filhote">Filhote</SelectItem>
            </Select>
            <Select
              placeholder="Selecione a idade"
              label="Nível de independência"
              flex="col"
              justifyTrigger="between"
              size="xl"
              variant="filed-light-coral"
            >
              <SelectItem value="Filhote">Filhote</SelectItem>
            </Select>
          </div>
        </div>
      </section>

      <section className="w-full h-full flex-col text-navy-900">
        <div className="w-full pl-10 pr-28 mt-36">
          <header className="flex flex-row items-center justify-between">
            <p>
              Encontre <span className="font-extrabold">324 amigos</span> na sua
              cidade
            </p>

            <Select
              placeholder="Filtro"
              size="sm"
              justifyTrigger="between"
              variant="filed-white-coral"
            >
              <SelectItem value="Gatos e Cachorros">
                Gatos e Cachorros
              </SelectItem>
            </Select>
          </header>

          <div className="grid grid-cols-3 gap-8 mt-12">
            {pets.map((pet) => (
              <PetCard key={pet.id} photo={pet.photo} name={pet.name} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
