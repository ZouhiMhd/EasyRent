import Image from "next/image"
import car1 from '../../../../public/images/car-1.jpg';
import welcome from "../../../../public/images/about.jpg"

export const Welcome = () => {
    return(<>    
    <div className="Greetings flex flex-wrap items-center" >
        <Image src={welcome} alt="welcome"/>
        <div className="content flex-1 p-10">
            <h4>A PROPOS DE NOUS</h4>
            <h2>Welcome to EasyRent</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

            <p> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin
            would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the 
            necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <button className="btn-welcome">Search Vehicules</button>
        </div>
    </div>
    </>);
};
