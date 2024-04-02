import { SideBar } from "@/components/SideBar";

export default function OrgLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full h-full flex flex-row">
      <SideBar hasOptionMenu hasGoBackButton />
      {children}
    </section>
  );
}
