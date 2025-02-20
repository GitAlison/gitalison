'use client';

import { useEffect, useRef } from "react"
import ClipboardJS from "clipboard";

export default function CopyEmail() {

    const btnRef = useRef(null);

    useEffect(() => {
        if (btnRef.current) {
            const clipboard = new ClipboardJS(btnRef.current);
            
            return () => {
                clipboard.destroy();
            }
        }

    }, [])


    return (
        <button ref={btnRef} type="button" data-clipboard-text="contato@alisonaguiar.com" data-clipboard-action="copy" data-clipboard-success-text="Copied to clipboard" className="js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white">

            <span>Copiar Email</span>

            <span className="hs-tooltip-content invisible z-10 hidden rounded-lg bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700" role="tooltip" data-popper-placement="top" style={{ position: 'fixed', inset: 'auto auto 0px 0px', margin: ' 0px', transform: 'translate3d(355px, -351px, 0px)' }}>
                Copiado
            </span>
        </button>
    )
}