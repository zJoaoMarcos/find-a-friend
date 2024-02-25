import { Logo } from '@/components/Logo';
import { Circle, Info, Phone, Zap } from 'lucide-react'

export default function Pet({ params } : { params: { id: string } }) { 
  console.log(params.id)
  return (
    <main className="w-screen h-full flex flex-col items-center pt-10 bg-[#FDECED]">
      <p className="text-[#8FA7B2]">Seu novo amigo</p>

      <div className="w-[700px] flex flex-col mt-10 bg-white rounded-2xl">
        <img
          className="max-h-80"
          src="/images/alfredo1.png"
          alt={`imagem do Alfredo`}
        />

        <div className="p-20 pt-8 text-navy-900 ">
          <div className="flex flex-row items-center justify-between mb-10">
            <div className="h-20 w-20 border-4 border-navy-900 rounded-2xl scale-110">
              <img src="/images/alfredo1.png" alt={`imagem do Alfredo`} className='object-cover rounded-xl  w-full h-full'/>
            </div>
            <div className="h-20 w-20 brightness-50 rounded-2xl">
              <img src="/images/alfredo1.png" alt={`imagem do Alfredo`} className='object-cover rounded-xl  w-full h-full'/>
            </div>
            <div className="h-20 w-20 brightness-50 rounded-2xl">
              <img src="/images/alfredo1.png" alt={`imagem do Alfredo`} className='object-cover rounded-xl  w-full h-full'/>
            </div>
            <div className="h-20 w-20 brightness-50 rounded-2xl">
              <img src="/images/alfredo1.png" alt={`imagem do Alfredo`} className='object-cover rounded-xl  w-full h-full'/>
            </div>
            <div className="h-20 w-20 brightness-50 rounded-2xl">
              <img src="/images/alfredo1.png" alt={`imagem do Alfredo`} className='object-cover rounded-xl  w-full h-full'/>
            </div>
            <div className="h-20 w-20 brightness-50 rounded-2xl">
              <img src="/images/alfredo1.png" alt={`imagem do Alfredo`} className='object-cover rounded-xl  w-full h-full'/>
            </div>
          </div>

          <p className="text-6xl font-extrabold">Alfredo</p>
          <p className="text-lg font-semibold mt-4">
            Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
            fazer companhia, uma bagunça mas também ama uma soneca.
          </p>

          <div className="w-full flex flex-row justify-between mt-11">
            <div className="w-40 h-24 flex flex-col items-center justify-center border border-navy-900/30 rounded-2xl">
              <div className="flex flex-row">
                <Zap />
                <Zap />
                <Zap />
                <Zap />
                <Zap fill="#0D3B66" strokeWidth={0} />
              </div>
              <p>Muita energia</p>
            </div>
            <div className="w-40 h-24 flex flex-col items-center justify-center border border-navy-900/30 rounded-2xl">
              <div className="flex flex-row">
                <Zap />
              </div>
              <p>Ambiente amplo</p>
            </div>
            <div className="w-40 h-24 flex flex-col items-center justify-center border border-navy-900/30 rounded-2xl">
              <div className="flex flex-row">
                <Circle />
                <Circle />
                <Circle fill="#0D3B66" strokeWidth={0} />
              </div>
              <p>Pequenino</p>
            </div>
          </div>

          <div className="w-full h-72 flex items-end justify-center mt-20 py-5 bg-navy-900 rounded-2xl">
            <p className="text-mustard-400 font-semibold">
              Ver rotas no Google Maps
            </p>
          </div>

          <div className="flex flex-row mt-10 space-x-4">
            <div className="h-16 w-16 flex items-center justify-center bg-mustard-400 rounded-2xl p-5">
              <Logo />
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-bold">Seu Cãopanheiro</p>
              <p className="text-base font-medium">
                Rua do meio, 123 , Boa viagem, Recife - PE
              </p>

              <div className="max-w-52 flex flex-row items-center justify-evenly p-4 mt-4 bg-navy-900/10 rounded-lg">
                <Phone size={18} />
                <p className="text-lg">81 1234.4567</p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <p className="text-3xl font-bold">Requisitos para adoção</p>

            <ul className="space-y-2 mt-10">
              <li className="flex flex-row px-6 py-2 space-x-2 text-lg font-semibold border border-coral-500 rounded-lg text-coral-500">
                {" "}
                <Info /> <p>Local grande para o animal correr e brincar.</p>
              </li>
              <li className="flex flex-row px-6 py-2 space-x-2 text-lg font-semibold border border-coral-500 rounded-lg text-coral-500">
                {" "}
                <Info /> <p>Proibido apartamento</p>
              </li>
              <li className="flex flex-row px-6 py-2 space-x-2 text-lg font-semibold border border-coral-500 rounded-lg text-coral-500">
                {" "}
                <Info /> <p>Ambiente frio, pois possui muito pelo.</p>
              </li>
              <li className="flex flex-row px-6 py-2 space-x-2 text-lg font-semibold border border-coral-500 rounded-lg text-coral-500">
                {" "}
                <Info /> <p>Cão com intolerância a lactose.</p>
              </li>
            </ul>
          </div>

          <button className="w-full flex flex-row items-center justify-center space-x-4 bg-[#3CDC8C] py-4 rounded-xl text-white font-bold mt-14">
            <Phone /> <p>Entrar em contato</p>
          </button>
        </div>
      </div>
    </main>
  );
}