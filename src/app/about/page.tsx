import { tech_stack } from "@/utils/data";
import { Profile } from "../components/Profile";
import Image from 'next/image'

export default function AboutPage() {


    return (
        <>
            <Profile />

            <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">

                <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">

                    <div >
                        <div className="" >
                            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                                Oi, Eu sou <span className="text-primary">Alison Aguiar</span> 👋
                                <div className=" inline-flex ml-2 text-xs items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light p-2 text-center font-medium leading-none text-primary dark:bg-dark-2 ">
                                    <span className="relative flex h-2 w-2 shrink-0">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                                    </span>
                                    <span>Checar disponibilidade</span>
                                </div>
                            </h2>
                        </div>
                        <p className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
                            Sou profissional com mais de 9 anos de experiência em programação, apaixonado por criar soluções tecnológicas que conectam negócios e inovação. Ao longo da minha trajetória, desenvolvi software personalizado para empresas, abrangendo todas as etapas do processo: planejamento, design, arquitetura, desenvolvimento, deploy e manutenção.
                            <br /> <br />
                            Além da programação, meu interesse por negócios e marketing me permite entender as necessidades dos clientes e aplicar soluções tecnológicas que agreguem valor real. Acredito no impacto que a tecnologia pode gerar para otimizar processos, aumentar a produtividade e impulsionar o crescimento das empresas.
                            <br /> <br />
                            Sempre em busca de novos desafios, estou comprometido em entregar resultados de qualidade e construir produtos que façam a diferença. 🚀
                        </p>
                    </div>
                </div>

                <h2 className="mt-8 text-3xl font-semibold">Tech Stack</h2>
                <div className="mt-2 grid grid-cols-[repeat(auto-fit,_minmax(100px,1fr))] gap-2 lg:grid-cols-[repeat(auto-fit,_minmax(120px,1fr))] lg:gap-4">
                    {tech_stack.map((e, i) => {
                        return <div key={i} className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <Image
                                width={0}
                                height={0}
                                alt="Tech Stack"
                                style={{ width: '100%', height: 'auto' }}
                                className="rounded-md"
                                src={e}
                            />
                        </div>

                    })}
                </div>

            </div>


        </>
    )
}