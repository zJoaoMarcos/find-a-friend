import { LogoWithText } from "@/components/Logo/LogoWithText";
import { Friends } from "@/components/Friends";

export default function OrgAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full h-screen flex flex-row justify-evenly items-center">
      <div className="w-[488px] h-[661px] flex flex-col items-center justify-between pt-28 pb-9 rounded-3xl bg-coral-500">
        <LogoWithText />

        <Friends width="384" />
      </div>
      {children}
    </section>
  );
}
