import { Logo } from '@/components/Logo';
import { Circle, Info, Maximize, Phone, Zap } from 'lucide-react'

export default function Pet({ params } : { params: { id: string } }) { 
  
  return (
    <main className="w-screen h-full flex flex-col items-center pt-10 bg-[#FDECED]">
      <p className="text-[#8FA7B2]">Seu novo amigo</p>

      <div className="w-[700px] flex flex-col bg-white rounded-2xl my-10">
        <img
          className="max-h-80"
          src="/images/alfredo1.png"
          alt={`imagem do Alfredo`}
        />

        <div className="p-20 pt-8 text-navy-900 ">
          <div className="flex flex-row items-center justify-between mb-10">
            <div className="h-20 w-20 border-4 border-navy-900 rounded-2xl scale-110">
              <img
                src="/images/alfredo1.png"
                alt={`imagem do Alfredo`}
                className="object-cover rounded-xl  w-full h-full"
              />
            </div>
            <div className="h-20 w-20 brightness-50 rounded-2xl">
              <img
                src="/images/alfredo1.png"
                alt={`imagem do Alfredo`}
                className="object-cover rounded-xl  w-full h-full"
              />
            </div>
            <div className="h-20 w-20 brightness-50 rounded-2xl">
              <img
                src="/images/alfredo1.png"
                alt={`imagem do Alfredo`}
                className="object-cover rounded-xl  w-full h-full"
              />
            </div>
            <div className="h-20 w-20 brightness-50 rounded-2xl">
              <img
                src="/images/alfredo1.png"
                alt={`imagem do Alfredo`}
                className="object-cover rounded-xl  w-full h-full"
              />
            </div>
            <div className="h-20 w-20 brightness-50 rounded-2xl">
              <img
                src="/images/alfredo1.png"
                alt={`imagem do Alfredo`}
                className="object-cover rounded-xl  w-full h-full"
              />
            </div>
            <div className="h-20 w-20 brightness-50 rounded-2xl">
              <img
                src="/images/alfredo1.png"
                alt={`imagem do Alfredo`}
                className="object-cover rounded-xl  w-full h-full"
              />
            </div>
          </div>

          <p className="text-6xl font-extrabold">Alfredo</p>
          <p className="text-lg font-semibold mt-4">
            Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
            fazer companhia, uma bagunça mas também ama uma soneca.
          </p>

          <div className="w-full flex flex-row justify-between mt-11">
            <div className=" h-20 p-6 flex flex-col items-start justify-center space-y-3 border-2 text-sm text-navy-900 border-navy-900/30 rounded-2xl">
              <span className="flex flex-row">
                <Zap size={18} />
                <Zap size={18} />
                <Zap size={18} />
                <Zap size={18} />
                <Zap size={18} fill="#A3BCD1" strokeWidth={0} />
              </span>
              <p>Muita energia</p>
            </div>

            <div className=" h-20 p-6 flex flex-col items-start justify-center space-y-3 border-2 text-sm text-navy-900 border-navy-900/30 rounded-2xl">
              <div className="flex flex-row">
                <Maximize size={18} />
              </div>
              <p>Ambiente amplo</p>
            </div>
            <div className=" h-20 p-6 flex flex-col items-start justify-center space-y-3 border-2 text-sm text-navy-900 border-navy-900/30 rounded-2xl">
              <div className="flex flex-row space-x-0.5">
                <Circle size={12} fill="#0D3B66" />
                <Circle size={12} fill="#A3BCD1" strokeWidth={0} />
                <Circle size={12} fill="#A3BCD1" strokeWidth={0} />
              </div>
              <p>Pequenino</p>
            </div>
          </div>

          <div className="w-full h-72 flex flex-col mt-20 bg-navy-900 rounded-3xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
              className='w-full h-64 rounded-3xl'
            />
            <p className="text-mustard-400 text-xl text-center p-5 font-semibold">
              Ver rotas no Google Maps
            </p>
          </div>

          <hr className="my-14 border-spacing-1.5 border-black/5" />

          <div className="flex flex-row space-x-4">
            <div className="h-16 w-16 flex items-center justify-center bg-[#F27006] rounded-2xl p-5">
              <Logo />
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-bold">Seu Cãopanheiro</p>
              <p className="text-base font-medium">
                Rua do meio, 123 , Boa viagem, Recife - PE
              </p>

              <div className="max-w-52 flex flex-row items-center justify-evenly p-4 mt-4 bg-navy-900/5 rounded-lg">
                <Phone size={18} fill="#0D3B66" />
                <p className="text-lg">81 1234.4567</p>
              </div>
            </div>
          </div>

          <hr className="my-14 border-spacing-1.5 border-black/5" />

          <div>
            <p className="text-3xl font-bold">Requisitos para adoção</p>

            <ul className="space-y-2 mt-10">
              <li className="flex flex-row px-6 py-3 space-x-3 text-lg font-semibold bg-gradient-to-t from-coral-300/5 to-coral-100 border border-coral-500 rounded-lg text-coral-500">
                <Info /> <p>Local grande para o animal correr e brincar.</p>
              </li>
              <li className="flex flex-row px-6 py-3 space-x-3 text-lg font-semibold bg-gradient-to-t from-coral-300/5 to-coral-100 border border-coral-500 rounded-lg text-coral-500">
                <Info /> <p>Proibido apartamento</p>
              </li>
              <li className="flex flex-row px-6 py-3 space-x-3 text-lg font-semibold bg-gradient-to-t from-coral-300/5 to-coral-100 border border-coral-500 rounded-lg text-coral-500">
                <Info /> <p>Ambiente frio, pois possui muito pelo.</p>
              </li>
              <li className="flex flex-row px-6 py-3 space-x-3 text-lg font-semibold bg-gradient-to-t from-coral-300/5 to-coral-100 border border-coral-500 rounded-lg text-coral-500 ">
                <Info /> <p>Cão com intolerância a lactose.</p>
              </li>
            </ul>
          </div>

          <hr className="my-14 border-spacing-1.5 border-black/5" />

          <button className="w-full flex flex-row items-center justify-center space-x-4 bg-[#3CDC8C] hover:bg-[#3CDC8C]/90 transition-colors py-4 rounded-xl text-white font-bold mt-14">
            <Phone /> <p>Entrar em contato</p>
          </button>
        </div>
      </div>
    </main>
  );
}