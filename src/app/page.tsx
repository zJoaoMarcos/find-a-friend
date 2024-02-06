import { Friends } from "@/components/Friends";
import { SearchOptions } from "@/components/SearchOptions";
import { LogoWithText } from "@/components/Logo/LogoWithText";

export default function Home() {
  return (
    <main className="w-full h-screen p-36 flex flex-col bg-coral-500">
      <header className="w-full">
        <LogoWithText />
      </header>

      <section className="w-full flex flex-row justify-between items-end mt-3">
        <p className="w-[487px] text-7xl font-extrabold">
          Leve a felicidade para o seu lar
        </p>
        <Friends />
      </section>

      <SearchOptions hasPlaceholder hasText />
    </main>
  );
}
