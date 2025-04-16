import Image from "next/image";
import { Profile } from "../components/Profile";

export default function WorksPage() {

    return (
        <>
            <Profile />
            <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
                <div className="">
                    <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
                        Confira meus últimos
                        <span className="text-primary">Projetos</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted dark:text-light/70">
                        Estou aqui para ajudar se você estiver procurando um designer de produto para dar vida à sua
                        ideia ou um parceiro de design para ajudar a levar seu negócio ao próximo
                        nível.
                    </p>
                </div>
                {/* Portfolio */}
                <div className="mt-10 lg:mt-14">
                    <div className="mt-6 space-y-6">
                        <div className="">
                            <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0 xl:p-10 xl:pb-0">
                                <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                                    <Image
                                        src="assets/img/projects/page_zapyflux.png"
                                        alt=""
                                        height={0}
                                        width={0}
                                        className="h-full w-full rounded-t-lg object-cover object-top transition"
                                    />
                                    <a
                                        href="https://zapyflux.com"
                                        data-gall="project-gallry-1"
                                        className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            className="h-6 w-6"
                                        >
                                            <path d="M10 4.167v11.666M4.167 10h11.666" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-start justify-between py-4 md:p-6">
                                <div className="">
                                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl">
                                        <a
                                            href="https://zapyflux.com"
                                            target="_blank"
                                            className="border-b border-transparent text-dark transition hover:border-b-primary hover:text-primary dark:text-light/80 dark:hover:text-primary"
                                        >
                                            Zapy Flux - SaaS Application Tools
                                        </a>
                                    </h3>
                                    <p className="text-sm text-muted lg:text-base">
                                        SaaS Appication | CRM Application
                                    </p>
                                </div>
                                <a
                                    href="https://zapyflux.com"
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition hover:text-primary dark:bg-black dark:text-light/70 dark:hover:text-primary"
                                >
                                    <span>Visitar site</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-4 w-4 shrink-0"
                                    >
                                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0 xl:p-10 xl:pb-0">
                                <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                                    <Image
                                        src="assets/img/projects/page_vitrinando.png"
                                        alt=""
                                        height={0}
                                        width={0}
                                        className="h-full w-full rounded-t-lg object-cover object-top transition"
                                    />
                                    <a
                                        href="https://vitrinando.com"
                                        data-gall="project-gallry-1"
                                        className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            className="h-6 w-6"
                                        >
                                            <path d="M10 4.167v11.666M4.167 10h11.666" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-start justify-between py-4 md:p-6">
                                <div className="">
                                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl">
                                        <a
                                            href="#"
                                            className="border-b border-transparent text-dark transition hover:border-b-primary hover:text-primary dark:text-light/80 dark:hover:text-primary"
                                        >
                                            Vitrinando - SaaS Application Tools
                                        </a>
                                    </h3>
                                    <p className="text-sm text-muted lg:text-base">
                                        Product Design | CRM Application
                                    </p>
                                </div>
                                <a
                                    href="https://vitrinando.com"
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition hover:text-primary dark:bg-black dark:text-light/70 dark:hover:text-primary"
                                >
                                    <span>Visitar site</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-4 w-4 shrink-0"
                                    >
                                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}