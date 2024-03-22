"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/Input";
import { useAuth } from "@/contexts/auth";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/@constants/app-routes";

const signInSchema = z.object({ 
  email: z.string().email({ message: 'Digite um email valido.'}).min(1, { message: 'Campo obrigatório.' }),
  password: z.string().min(1, { message: 'Campo obrigatório.' })
})

type SignInFormData = z.infer<typeof signInSchema>

export default function SignIn() { 
  const { register, handleSubmit, formState: { errors, isSubmitting} } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema)
  })

  const { login } = useAuth()
  const router = useRouter()

  async function handleSignIn(data: SignInFormData) {
    event?.preventDefault()
    
    const { email, password } = data

    await login(email, password).then(res => {
      router.push(APP_ROUTES.private.profile)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <section className="w-[488px] h-[661px] flex flex-col items-start justify-between pt-20 text-navy-900">
      <h2 className="text-5xl font-bold">Boas Vindas!</h2>

      <form onSubmit={handleSubmit(handleSignIn)} className="w-full flex flex-col gap-4 mt-24">
        <Input
          {...register("email")}
          error={errors.email}
          label="Email"
          type="email"
          placeholder="name@email.com"
        />
        <Input
          {...register("password")}
          error={errors.password}
          label="Senha"
          type="password"
          placeholder="****************"
        />

        <div className="w-full gap-5 flex flex-col mt-16">
          <button className="h-16 bg-navy-900 rounded-2xl font-extrabold text-white">
            {isSubmitting ? 'Carregando...' : 'Entrar'}
          </button>

          <Link href='/orgs/sign-up' className="h-16 flex items-center justify-center bg-navy-900/10 rounded-2xl font-extrabold text-navy-900">
            Cadastra minha organização
          </Link>
        </div>
      </form>
    </section>
  );
} 