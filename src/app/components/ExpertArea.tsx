'use client'

import { tech_stack } from "@/utils/data"

export default function ExpertArea() {

    
    return (<div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <h3 className="text-2xl font-semibold dark:text-light">Stack</h3>
        <marquee behavior="scroll" onMouseOver={(e)=>{e?.target?.stop()}} onMouseOut={(e)=>{e.target.start()}} direction="up" className="h-64 overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-muted dark:bg-dark-2">
            <div className=" grid grid-cols-3 grid-flow-row gap-4 overflow-y-scroll pointer-events-none">


                {tech_stack.map((e, i) => {
                    return <img key={i} src={e} width={300} className="rounded-md " />
                })}
            </div>
        </marquee>
        {/* <marquee
            behavior="scroll"
            direction="left"
            className="h-64 grid grid-rows-5 grid-flow-col gap-4 overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-muted dark:bg-dark-2"
        >
            <div className="h-64 grid grid-rows-3 grid-flow-col gap-4">

                {stack.map((e, i) => {
                    return <div className="flex flex-nowrap">
                        <img key={i} src={e}  className="rounded-md" />
                    </div>
                    //<div key={i} className="rounded-md bg-red-500 h-7 w-11" > a</div>
                })}
            </div>
        </marquee> */}


        {/* <div className="flex flex-wrap gap-2 p-1 rounded-md items-center align-middle">
            {stack.map((e, i) => {
                return <img key={i} src={e} className="rounded-md" />
            })}
        </div> */}
    </div>
    )
}