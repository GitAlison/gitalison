import { SlSocialFacebook, SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { MdPhoneInTalk } from "react-icons/md";
import Image from 'next/image'
import CopyEmail from "./CopyEmail";


export function Profile() {

    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <div className="aspect-6/4 overflow-hidden rounded-lg bg-light pt-4 text-center dark:bg-dark-2">
                <Image src='assets/img/profile.png' width={300} height={300} alt="" className="inline-block h-full w-full scale-110 object-contain object-bottom" />
            </div>

            <div className="mt-6">
                <h3 className="text-2xl font-semibold dark:text-light">Alison Aguiar 👋</h3>
                <p className="mt-2 text-muted dark:text-light/70">
                    Um desenvolvedor <span className="font-semibold text-dark dark:text-white">
                        Full Stack Developer
                    </span> apaixonado 🖥️ e <span className="font-semibold text-dark dark:text-white">
                        Product Designer
                    </span> com <span className="font-semibold text-dark dark:text-white"> 8 anos </span> de experiência.
                </p>


                <div className="mt-6 flex flex-wrap gap-2">
                    <a href="https://api.whatsapp.com/send?phone=5585981182610" className="inline-flex items-center gap-x-2 dark:text-dark rounded-lg border border-transparent bg-primary px-6 py-4 font-medium  transition hover:bg-primary-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50">
                        <MdPhoneInTalk size={25} />
                        <span>Agende comigo</span>
                    </a>
                    <CopyEmail />
                </div>


                <div className="mt-8 flex flex-wrap items-center gap-2">
                    <a href="https://github.com/gitalison" target="_newblank" className="flex p-3 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-slate-100 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-slate-200">
                        <SlSocialGithub size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/alison-aguiar" target="_newblank" className="flex p-3 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-blue-400 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-blue-400">
                        <SlSocialLinkedin size={25} />
                    </a>
                    <a href="https://www.facebook.com/AlisonAguiahr" target="_newblank" className="flex p-3 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-blue-500 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-blue-500">
                        <SlSocialFacebook size={25} />
                    </a>
                    <a href="https://instagram.com/alison_aguiarof" target="_newblank" className="flex p-3 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-red-500 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-red-500">
                        <SlSocialInstagram size={25} />
                    </a>
                </div>
            </div>
        </div>
    )
}