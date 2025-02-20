'use client'
import { tech_stack } from "@/utils/data"
import Image from "next/image"

export default function ExpertArea() {


    return (<div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <h3 className="text-2xl font-semibold dark:text-light">Stack</h3>
        {/* @ts-expect-error marquee */}
        <marquee behavior="scroll" onMouseOver={(e) => { e?.target?.stop() }} onMouseOut={(e) => { e.target.start() }} direction="up" className="h-64 overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-muted dark:bg-dark-2">
            <div className=" grid grid-cols-3 grid-flow-row gap-4 overflow-y-scroll pointer-events-none">
                {tech_stack.map((e, i) => {
                    return <Image key={i} src={e} alt="Tech Stack" height={300} width={300} className="rounded-md " />
                })}
            </div>
            {/* @ts-expect-error marquee */}
        </marquee>
    </div>
    )
}