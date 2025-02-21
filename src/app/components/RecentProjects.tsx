import Image from "next/image";
import Link from "next/link";

export default function RecentProjects() {

    return <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-2xl font-semibold dark:text-light">Projetos Recentes</h3>
            <Link
                href="portfolio.html"
                className="inline-flex items-center justify-center gap-2 border-b text-center text-base dark:text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
            >
                <span>Todos</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                >
                    <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
                </svg>
            </Link>
        </div>
        <div className="mt-6 space-y-6">
            <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
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
                        target="_blank"
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
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                    <span className="rounded bg-white dark:bg-dark px-2 py-1 text-xs font-medium dark:text-primary shadow">
                        Created from Scratch
                    </span>
                </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
                <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                    <Image
                        src="assets/img/projects/page_zapyflux.png"
                        alt=""
                        height={0}
                        width={0}
                        className="h-full w-full rounded-t-lg object-cover object-top transition"
                    />
                    <a
                        href="https://www.zapyflux.com"
                        target="_blank"
                        data-gall="project-gallry-2"
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
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                    <span className="rounded bg-white dark:bg-dark px-2 py-1 text-xs font-medium dark:text-primary shadow">
                        Created from Scratch
                    </span>
                </div>
            </div>
        </div>
    </div>

}