"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "./SearchIcon";
import { Select, SelectItem } from "@/components/Select";

const state = [
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
const cities = state.flatMap((state) => state.cities.map((city) => city));

interface SearchOptionsProps { 
  hasText?: boolean
  hasPlaceholder?: boolean
  margingTop?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export function SearchOptions({ hasText = false , hasPlaceholder = false, margingTop = 'xl' } :SearchOptionsProps) {
  const [selectState, setSelectState] = useState<string>(state[0].name);
  const [selectCity, setSelectCity] = useState(cities);

  const statePlaceholder = hasPlaceholder ? "Busque um amigo:" : undefined

    const $margingTop = {
      xs: 'mt-2',
      sm: 'mt-6',
      md: 'mt-10',
      lg: 'mt-20',
      xl: 'mt-32',
    }

  useEffect(() => {
    if (selectState) {
      const citiesFiltered = state
        .filter((state) => state.name === selectState)
        .flatMap((state) => state.cities.map((city) => city));

      setSelectCity(citiesFiltered);
    }
  }, [selectState]);

  return (
    <section className={`flex flex-row justify-between ${$margingTop[margingTop]}`}>
      {hasText && (
        <p className="w-[407px] text-2xl font-semibold">
          Encontre o animal de estimação ideal para seu estilo de vida!
        </p>
      )}

      <div className="flex flex-row items-center gap-4">
        <Select
          placeholder="Estado"
          label={statePlaceholder}
          defaultValue={selectState}
          variant="outlined-white-row"
          size="xs" 
          onValueChange={(e) => setSelectState(e)}
        >
          {state.map((state, index) => (
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

        <button className="w-16 h-16 flex justify-center items-center rounded-2xl bg-[#F4D35E] hover:bg-[#F4D35E]/90">
          <SearchIcon />
        </button>
      </div>
    </section>
  );
}
