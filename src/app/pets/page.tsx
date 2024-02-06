"use client"

import { Logo } from "@/components/Logo";
import { SearchOptions } from "@/components/SearchOptions";
import { Select, SelectItem } from "@/components/Select";

export default function Pets() {

  return (
    <main className="w-full h-screen flex flex-row bg-gray-50">
      <section className="h-full flex flex-col gap-7 bg-coral-500">
        <header className="px-14 pt-20">
          <Logo />

          <SearchOptions margingTop="sm"/>
        </header>

        <div className="h-full px-14 py-10 row-span-2 bg-coral-300">
          <p className="text-xl font-extrabold">Filtros</p>

          <div className="w-full inline-flex items-center justify-center mt-6 gap-7">
            <Select placeholder="Selecione a idade"  >
              <SelectItem value="Filhote">Filhote</SelectItem>
            </Select>
          </div>
        </div>
      </section>
      <section className="w-1/2 h-1/2 flex items-center justify-center"> 
       
      </section>

    </main>
  );
}
