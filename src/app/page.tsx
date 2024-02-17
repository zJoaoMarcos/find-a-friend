"use client"

import { Button } from "@/components/Button";
import { Friends } from "@/components/Friends";
import { LogoWithText } from "@/components/Logo/LogoWithText";
import { SearchIcon } from "@/components/SearchIcon";
import { Select, SelectItem } from "@/components/Select";
import React, { useState } from "react";

const stateOptions = [
  {
    name: "SP",
    cities: [
      { name: "São Caetano do Sul" },
      { name: "Santo André" },
      { name: "São Paulo" },
    ],
  },
  {
    name: "RJ",
    cities: [{ name: "Rio de Janeiro" }, { name: "Teresópolis " }],
  },
];

export default function Home() {
  const [selectedState, setSelectedState] = React.useState<string>(stateOptions[0].name);
  const [stateCities, setStateCities] = React.useState(() =>
    stateOptions
    .filter((state) => state.name === selectedState)
    .flatMap((state) => state.cities.map((city) => city))
    );
  const [selectedCity, setSelectedCity] = useState<string>('')
    
  function handleSelectState(stateSelected: string) {
    const citiesFiltered = stateOptions
      .filter((state) => state.name === stateSelected)
      .flatMap((state) => state.cities.map((city) => city));

    setStateCities(citiesFiltered);
    setSelectedState(stateSelected);
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
            placeholder="Estado"
            label="Busque um amigo:"
            defaultValue={selectedState}
            variant="outlined-white"
            size="xs"
            onValueChange={(e) => handleSelectState(e)}
          >
            {stateOptions.map((state, index) => (
              <SelectItem key={index} value={state.name}>
                {state.name}
              </SelectItem>
            ))}
          </Select>

          <Select placeholder="Selecione uma Cidade" onValueChange={(city) => setSelectedCity(city)}>
            {stateCities.map((city) => (
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
