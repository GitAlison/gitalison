import Image from 'next/image'

export default function WorkExperience() {
    return (
        <div className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
            <h3 className="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-black dark:text-light">
                Experiência Profissional
            </h3>
            <div className="max-h-[280px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
                <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                    <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                        <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                            2024 - Hoje
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                                <Image src="assets/img/invilia.webp" alt="" width={80} height={80} className="h-5 w-5" />
                            </div>
                            <div className="">
                                <h6 className="text-base font-semibold text-dark dark:text-light/70">
                                    Invillia.
                                </h6>
                                <p className="text-sm text-muted">Software Enginnier</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                        <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                            2021 - 2023
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                                <Image src="assets/img/2brain.png" alt="" width={80} height={80} className="h-5 w-5" />
                            </div>
                            <div className="">
                                <h6 className="text-base font-semibold text-dark dark:text-light/70">
                                    2 Brain.
                                </h6>
                                <p className="text-sm text-muted">Software Enginnier Senior</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                        <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                            2018 - 2021
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                                <Image src="assets/img/gc.png" alt="" width={80} height={80} className="h-5 w-5" />
                            </div>
                            <div className="">
                                <h6 className="text-base font-semibold text-dark dark:text-light/70">
                                    General Claims
                                </h6>
                                <p className="text-sm text-muted">Senior Software Enginnier</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                        <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                            2023 - Hoje
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                                <Image src="assets/img/zapyflux.png" width={0} height={0} alt="" className="h-5 w-5" />
                            </div>
                            <div className="">
                                <h6 className="text-base font-semibold text-dark dark:text-light/70">
                                    ZapyFlux
                                </h6>
                                <p className="text-sm text-muted">Owner</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                        <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                            2021 - Hoje
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                                <Image src="assets/img/vitrinando.png" alt="" width={0} height={0}  className="h-5 w-5" />
                            </div>
                            <div className="">
                                <h6 className="text-base font-semibold text-dark dark:text-light/70">
                                    Vitrinando
                                </h6>
                                <p className="text-sm text-muted">Owner</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}