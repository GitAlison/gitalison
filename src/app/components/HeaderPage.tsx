'use client'
import { IoPersonOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { CiMenuFries } from "react-icons/ci";
import { MdCallMissedOutgoing } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineColorSwatch } from "react-icons/hi";


export default function HeaderPage() {

    const pathname = usePathname();

    return (
        <>
            <header className="sticky top-0 z-50">
                <div className="">
                    <div className="flex items-center justify-between rounded-2xl bg-white p-3 shadow dark:bg-black dark:shadow-dark">
                        <a className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark dark:text-white">
                            <span> Alison<span className="text-primary">.Aguiar</span> </span>
                        </a>

                        <ul className="hidden flex-1 flex-wrap items-center justify-center lg:flex">
                            <li className={`group/menu-item ${pathname == "/" ? "active" : ""} `}>
                                <Link href="/" className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                                    <GrHomeRounded size={20} />
                                    <span>Inicio</span>
                                </Link>
                            </li>
                            <li className={`group/menu-item ${pathname == "/sobre" ? "active" : ""} `}>
                                <a href="/sobre" className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                                    <IoPersonOutline size={20} />
                                    <span>Sobre</span>
                                </a>
                            </li>
                            {/* <li className="group/menu-item ">
                            <a href="services.html" className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                                <IoLayersOutline size={20} />
                                <span>Services</span>
                            </a>
                        </li> */}
                            <li className={`group/menu-item ${pathname == "/trabalhos" ? "active" : ""} `}>
                                <a href="/trabalhos" className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                                    <HiOutlineColorSwatch size={20} />
                                    <span>Trabalhos Recentes</span>
                                </a>
                            </li>
                            {/* <li className="group/menu-item ">
                            <a href="blog.html" className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                                <BsSignpost size={20} />
                                <span>Blog</span>
                            </a>
                        </li> */}
                            {/* <li className="group/menu-item ">
                            <a href="contact.html" className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                                <AiOutlineMessage size={20} />
                                <span>Contato</span>
                            </a>
                        </li> */}
                        </ul>


                        <div className="hidden items-center gap-4 lg:flex">
                            {/* <div className="">
                                <button type="button" className="hs-dark-mode group flex p-2 items-center justify-center rounded-lg text-center font-medium text-dark transition hover:bg-light hs-dark-mode-active:hidden dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="dark">
                                    <IoMoonSharp size={25} />
                                </button>
                                <button type="button" className="hs-dark-mode group hidden p-2 items-center justify-center rounded-lg text-center font-medium text-dark transition hover:bg-light hs-dark-mode-active:flex dark:text-[#FD7E41] dark:hover:bg-dark dark:hover:text-[#FD7E41]" data-hs-theme-click-value="light">
                                    <IoMoonSharp size={25} />
                                </button>
                            </div> */}

                            <a href="https://api.whatsapp.com/send?phone=5585981182610" className="inline-flex items-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white">
                                <span>Fala comigo</span>
                                <MdCallMissedOutgoing size={25} />
                            </a>
                        </div>

                        <button type="button" className="text-dark transition dark:text-white/70 lg:hidden" data-hs-overlay="#mobile-menu" aria-controls="mobile-menu" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle Navigation</span>
                            <CiMenuFries size={25} />
                        </button>
                    </div>
                </div>
            </header>
            <div
                id="mobile-menu"
                className="hs-overlay fixed bottom-0 start-0 top-0 z-[60] h-full w-64 -translate-x-full transform overflow-y-auto bg-white transition-all duration-300 hs-overlay-open:translate-x-0 dark:bg-black [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2 hidden"

                tabIndex={-1}
            >
                <div className="flex h-full flex-col justify-between gap-5 p-5">
                    <div className="">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark dark:text-white"
                        >
                            <Image src="/assets/img/logo.png" alt="Alison Aguiar Logo" height={30} width={30} />
                            <span>
                                {" "}
                                Alison<span className="text-primary">Aguiar</span>{" "}
                            </span>
                        </Link>
                    </div>
                    <ul className="mt-4 flex flex-1 flex-col gap-2">
                        <li className={`group/menu-item ${pathname == "/" ? "active" : ""} `}>
                            <Link
                                href="/"
                                className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                            >
                                <GrHomeRounded size={20} />
                                <span>Inicio</span>
                            </Link>
                        </li>
                        <li className={`group/menu-item ${pathname == "/sobre" ? "active" : ""} `}>
                            <a
                                href="/sobre"
                                className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                            >
                                <IoPersonOutline size={20} />
                                <span>Sobre mim</span>
                            </a>
                        </li>
                        <li className={`group/menu-item ${pathname == "/trabalhos" ? "active" : ""} `}>
                            <a
                                href="/trabalhos"
                                className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                            >
                                <HiOutlineColorSwatch size={20} />
                                <span>Trabalhos Recentes</span>
                            </a>
                        </li>

                    </ul>
                    <div className="flex flex-col gap-3">
                        <button
                            data-hs-theme-click-value="dark"
                            className="hs-dark-mode flex w-full items-center justify-start gap-2 rounded-lg px-4 py-2 text-center text-sm text-muted transition hover:bg-light hs-dark-mode-active:hidden dark:hover:bg-dark dark:hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                            >
                                <path d="M11.8 3a8.656 8.656 0 0 0-4.523 1.28A8.918 8.918 0 0 0 4.04 7.756a9.167 9.167 0 0 0 .44 9.24 8.863 8.863 0 0 0 3.553 3.137 8.633 8.633 0 0 0 4.624.824 8.69 8.69 0 0 0 4.381-1.723 8.973 8.973 0 0 0 2.892-3.78c.3-.738-.419-1.48-1.142-1.179a5.604 5.604 0 0 1-3.892.15 5.74 5.74 0 0 1-3.083-2.431 5.956 5.956 0 0 1-.848-3.886c.17-1.357.8-2.61 1.78-3.541l.069-.072c.485-.567.099-1.488-.668-1.488h-.234l-.06-.005L11.8 3Z" />
                            </svg>
                            <span>Mudar Aparencia</span>
                        </button>
                        <button
                            data-hs-theme-click-value="light"
                            className="hs-dark-mode hidden w-full items-center justify-start gap-2 rounded-lg px-4 py-2 text-center text-sm text-muted transition hover:bg-light hs-dark-mode-active:flex dark:hover:bg-dark dark:hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                            >
                                <path d="M10 15.833a.833.833 0 0 1 .828.736l.005.098v.833a.833.833 0 0 1-1.66.097l-.006-.097v-.833a.833.833 0 0 1 .833-.834Zm5.26-1.741.08.069.582.583a.833.833 0 0 1-1.1 1.248l-.078-.07-.583-.583a.833.833 0 0 1 1.015-1.306l.085.059Zm-9.42.068a.833.833 0 0 1 .068 1.1l-.069.08-.583.582a.833.833 0 0 1-1.248-1.1l.07-.078.583-.583a.833.833 0 0 1 1.178 0ZM3.333 9.167a.833.833 0 0 1 .098 1.66l-.098.006H2.5a.833.833 0 0 1-.098-1.66l.098-.006h.833Zm14.167 0a.833.833 0 0 1 .098 1.66l-.098.006h-.833a.833.833 0 0 1-.098-1.66l.098-.006h.833ZM5.178 4.008l.078.07.583.583a.833.833 0 0 1-1.1 1.247l-.078-.069-.583-.583A.833.833 0 0 1 5.092 3.95l.086.058Zm10.744.069a.833.833 0 0 1 .07 1.1l-.07.079-.583.583a.833.833 0 0 1-1.247-1.1l.069-.078.583-.584a.833.833 0 0 1 1.178 0ZM10 1.667a.833.833 0 0 1 .828.736l.005.097v.833a.833.833 0 0 1-1.66.098l-.006-.098V2.5A.833.833 0 0 1 10 1.667Zm0 4.166a4.167 4.167 0 1 1-4.163 4.348L5.833 10l.004-.18A4.167 4.167 0 0 1 10 5.832Z" />
                            </svg>
                            <span>Mudar Aparencia</span>
                        </button>
                        <Link
                            href="https://api.whatsapp.com/send?phone=5585981182610"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white"
                        >
                            <span>Fala comigo</span>
                            <MdCallMissedOutgoing size={25} />
                        </Link>
                    </div>
                </div>
            </div>

        </>

    )
}