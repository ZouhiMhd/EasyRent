import Link from "next/link"
import { TopProps } from "../../../types"
export const Top = ({nom,title}:TopProps) => {
    return(
        <div className="w-full bg-[url('../../public/images/bg_2.jpg')] p-[100px] text-white  bg-cover bg-no-repeat bg-top-center  text-white w-full  relative">
                <div className="mx-auto w-[90%] p-2  bottom-0 right-0 p-8 ">
                    <div className="text-gray-400 col-md-9 font-semibold">
                        <Link href="/home">{"HOME >"}</Link>{nom}{">"}
                    </div>
                    <h1 className="text-5xl font-bold" >{title}</h1>
                </div>
        </div>
    );
};
