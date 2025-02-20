import Image from 'next/image'


export default function Shapes() {
    return <div className="shapes">
        <div className="fixed -left-1/2 -top-1/2 -z-10 animate-spin-very-slow xl:-left-[20%] xl:-top-1/3">
            <Image src="assets/img/gradient-1.png" width={800} height={800} alt="" className="" />
        </div>
        <div className="fixed -right-[50%] top-[10%] -z-10 animate-spin-very-slow xl:-right-[15%] xl:top-[10%]">
            <Image src="assets/img/gradient-2.png" width={800} height={800} alt="" className="" />
        </div>
        {/* <div className="fixed -right-[50%] top-[10%] -z-10 animate-spin-very-slow xl:-right-[15%] xl:top-[10%]">
            <img src="assets/img/gradient-2.png" alt="" className="" />
        </div>
        <div
            className="move-with-cursor fixed left-[10%] top-[20%] -z-10"
            style={{
                transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: "translate(22.17px, 0.44px) rotate(22.61deg)"
            }}
        >
            <img src="assets/img/object-3d-1.png" alt="" className="" />
        </div>
        <div
            className="move-with-cursor fixed bottom-[20%] right-[10%] -z-10"
            style={{
                transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: "translate(22.17px, 0.44px) rotate(22.61deg)"
            }}
        >
            <img src="assets/img/object-3d-2.png" alt="" className="" />
        </div> */}
    </div>

}