import Link from "next/link"

export const BecomAgence = () => {
    return(
        <>
        <section className="w-full bg-[url('../../public/images/bg_2.jpg')] p-[100px] text-white  bg-cover bg-no-repeat bg-top-center  text-white w-full  relative">
            <div className="content " >
                <h1>Voulez vous mettre des véhicules en location? So Don't Be Late.</h1>
                <Link href="/agence/register"><button className="bg-[#01d28e]" >Devenir locateur de vehicules</button></Link>
            </div>
        </section>
        
        </>
    );
};
