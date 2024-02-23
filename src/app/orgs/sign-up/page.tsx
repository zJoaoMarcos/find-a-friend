import { Input } from "@/components/Input";
import Link from "next/link";

export default function SignUp() {
  return (
    <section className="w-[488px] h-[661px] flex flex-col items-start justify-between pt-20 mb text-navy-900">
      <h2 className="text-5xl font-bold">Cadastre sua organização</h2>

      <div className="w-full flex flex-col gap-4 mt-24">
        <Input
          name="completeName"
          label="Nome do responsável"
          type="text"
          placeholder="Nome completo"
        />
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="name@email.com"
        />
        <Input
          name="cep"
          label="CEP"
          type="text"
          placeholder="000.000.000-00"
        />
        <Input
          name="address"
          label="Endereço"
          type="text"
          placeholder="Rua do meio, 20"
        />
        <Input
          name="number"
          label="Whatsapp"
          type="text"
          placeholder="55 94002-8922"
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          placeholder="****************"
        />
        <Input
          name="password"
          label="Confirmar Senha"
          type="passwordConfirmation"
          placeholder="****************"
        />

        <div className="w-full gap-5 flex flex-col justify-center mt-16">
          <button className="h-16 bg-navy-900 rounded-2xl font-extrabold text-white">
            Login
          </button>

          <Link href='/orgs/sign-in' className="font-extrabold text-navy-900 text-center underline">
            Já possui conta?
          </Link>
        </div>
      </div>
    </section>
  );
} 