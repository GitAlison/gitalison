declare global {
    namespace JSX {
        interface IntrinsicElements {
            'marquee': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

export default function LetsWork() {
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <marquee
                behavior="scroll"
                direction="left"
                className="overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-muted dark:bg-dark-2"
            >
                Disponível para contratação, especializado em criar experiências digitais inovadoras e criativas. 🚀🎨
            </marquee>
            <h2 className="mt-4 text-[40px] font-semibold leading-snug text-dark dark:text-light">
                Vamos <div className="rise-shake inline-block">👋</div> <br />
                Trabalhar juntos
            </h2>
            <a
                href="https://api.whatsapp.com/send?phone=5585981182610"
                className="mt-6 inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
            >
                <span>Let's Talk</span>
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
                    <path d="M17.5 11.667v-5h-5" />
                    <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
                </svg>
            </a>
        </div>

    );
}