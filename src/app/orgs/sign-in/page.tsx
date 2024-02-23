import { Input } from "@/components/Input";
import Link from "next/link";

export default function SignIn() { 
  return (
    <section className="w-[488px] h-[661px] flex flex-col items-start justify-between pt-20 text-navy-900">
      <h2 className="text-5xl font-bold">Boas Vindas!</h2>

      <div className="w-full flex flex-col gap-4 mt-24">
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="name@email.com"
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          placeholder="****************"
        />

        <div className="w-full gap-5 flex flex-col mt-16">
          <button className="h-16 bg-navy-900 rounded-2xl font-extrabold text-white">
            Login
          </button>

          <Link href='/orgs/sign-up' className="h-16 flex items-center justify-center bg-navy-900/10 rounded-2xl font-extrabold text-navy-900">
            Cadastra minha organização
          </Link>
        </div>
      </div>
    </section>
  );
} 