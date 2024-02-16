"use client"

import { Button } from "@/components/Button";
import { Friends } from "@/components/Friends";
import { LogoWithText } from "@/components/Logo/LogoWithText";
import { SearchIcon } from "@/components/SearchIcon";
import { Select, SelectItem } from "@/components/Select";
import React from "react";

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
const citiesOptions = stateOptions.flatMap((state) => state.cities.map((city) => city));

export default function Home() {
  const [selectState, setSelectState] = React.useState<string>(stateOptions[0].name);
  const [selectCity, setSelectCity] = React.useState(citiesOptions);

  React.useEffect(() => {
    if (selectState) {
      const citiesFiltered = stateOptions
        .filter((state) => state.name === selectState)
        .flatMap((state) => state.cities.map((city) => city));

      setSelectCity(citiesFiltered);
    }
  }, [selectState]);

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
            defaultValue={selectState}
            variant="outlined-white"
            size="xs"
            onValueChange={(e) => setSelectState(e)}
          >
            {stateOptions.map((state, index) => (
              <SelectItem key={index} value={state.name}>
                {state.name}
              </SelectItem>
            ))}
          </Select>

          <Select placeholder="Selecione uma Cidade">
            {selectCity.map((city, index) => (
              <SelectItem key={index} value={city.name}>
                {city.name}
              </SelectItem>
            ))}
          </Select>

          <Button icon={<SearchIcon />} className="h-16 w-16" />
        </div>
      </section>
    </main>
  );
}
