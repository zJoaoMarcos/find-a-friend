'use client'

import { Input } from '@/components/Input';
import { Logo } from '@/components/Logo';
import { Select, SelectItem } from '@/components/Select';
import { TextArea } from '@/components/TextArea';
import { LogIn } from 'lucide-react'

export default function Register() { 
  
  return (
    <main className="w-screen h-full flex flex-col items-center pt-10 bg-[#FDECED]">
      <div className="w-[700px] px-20 py-6 flex flex-row justify-between bg-navy-900 rounded-2xl text-white">
        <div className="flex flex-row space-x-4">
          <div className="h-16 w-16 flex items-center justify-center bg-[#F27006] rounded-2xl p-5">
            <Logo />
          </div>
          <div className="flex flex-col">
            <p className="text-3xl font-bold">Seu Cãopanheiro</p>
            <p className="text-base font-medium">
              Rua do meio, 123 , Boa viagem, Recife - PE
            </p>
          </div>
        </div>
        <button className="h-16 w-16 flex items-center justify-center rounded-2xl bg-[#114A80]">
          <LogIn />
        </button>
      </div>

      <div className="w-[700px] p-20 pt-8 flex flex-col bg-white text-navy-900 rounded-2xl my-10">
        <p className="text-4xl font-extrabold">Adicione um pet</p>

        <hr className="mt-5 mb-10 border-spacing-1.5 border-black/5" />

        <div className='flex flex-col gap-6'>
          <Input name="nome" type="text" label="Nome" />

          <TextArea name="description" label="Descrição" />

          <Select variant='outlined-blue-light' size='full' placeholder='Selecione a idade' justifyTrigger='between'>
            <SelectItem value='teste' >teste</SelectItem>
          </Select>

          <Select variant='outlined-blue-light' size='full' placeholder='Selecione a idade' justifyTrigger='between'>
            <SelectItem value='teste' >teste</SelectItem>
          </Select>
          
          <Select variant='outlined-blue-light' size='full' placeholder='Selecione a idade' justifyTrigger='between'>
            <SelectItem value='teste' >teste</SelectItem>
          </Select>
        </div>
      </div>
    </main>
  );
}