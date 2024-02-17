import { Friends } from "@/components/Friends";
import { LogoWithText } from "@/components/Logo/LogoWithText";

export default function SignUp() { 
  return (
    <main className="w-full h-screen flex flex-row justify-evenly items-center">
      <section className="w-[488px] h-[661px] flex flex-col items-center justify-between pt-28 pb-9 rounded-3xl bg-coral-500">
        <LogoWithText />

        <Friends width="384" />
      </section>

      <section className="w-[488px] h-[661px] flex flex-col items-start justify-between pt-20 text-navy-900">
        
        <div className="w-full flex flex-col gap-4">
        {/*   <div className="flex flex-col items-start w-full">
            <label htmlFor="" className="pl-0.5 mb-2 text-base font-semibold">Email</label>
            <input
              type="text"
              className="w-full h-16 py-1 px-4 ring-2 bg-navy-900/10 ring-navy-900/20 outline-none rounded-2xl font-semibold text-navy-900/90"
              placeholder="****************"
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label htmlFor="" className="pl-0.5 mb-2 text-base font-semibold">Senha</label>
            <input
              type="text"
              className="w-full h-16 py-1 px-4 ring-2 bg-navy-900/10 ring-navy-900/20 outline-none rounded-2xl font-semibold text-navy-900/90"
              placeholder="nome@email.com"
            />
          </div>

          <div className="w-full gap-5 flex flex-col mt-16">
            <button className="h-16 bg-navy-900 rounded-2xl font-extrabold text-white">
              Login
            </button>
            <button className="h-16 bg-navy-900/10 rounded-2xl font-extrabold text-navy-900">
              Cadastra minha organização
            </button>
          </div> */}
        </div>
      </section>
    </main>
  );
} 