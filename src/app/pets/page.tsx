"use client"

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
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

export default function Pets() {
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
    <main className="w-full h-screen flex flex-row bg-gray-50">
      <section className="h-full flex flex-col gap-7 bg-coral-500">
        <header className="px-14 pt-20">
          <Logo />

          <section className="flex flex-row justify-between mt-6">
            <div className="flex flex-row items-center gap-4">
              <Select
                placeholder="Estado"
                defaultValue={selectState}
                variant="outlined-white-row"
                size="xs"
                onValueChange={(e) => setSelectState(e)}
              >
                {stateOptions.map((state, index) => (
                  <SelectItem key={index} value={state.name}>
                    {state.name}
                  </SelectItem>
                ))}
              </Select>

              <Select placeholder="Selecione uma Cidade" variant="filed-coral-row">
                {selectCity.map((city, index) => (
                  <SelectItem key={index} value={city.name}>
                    {city.name}
                  </SelectItem>
                ))}
              </Select>

              <Button icon={<SearchIcon />} className="h-14 w-14" />
            </div>
          </section>
        </header>

        <div className="h-full px-14 py-10 row-span-2 bg-coral-300">
          <p className="text-xl font-extrabold">Filtros</p>

          <div className="w-full inline-flex items-center justify-center mt-6 gap-7">
            <Select placeholder="Selecione a idade" variant="filed-coral-300-row">
              <SelectItem value="Filhote">Filhote</SelectItem>
            </Select>
          </div>
        </div>
      </section>
      <section className="w-1/2 h-1/2 flex items-center justify-center"></section>
    </main>
  );
}
