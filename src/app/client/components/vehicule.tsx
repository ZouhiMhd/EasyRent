import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';

interface VehiculeProps {
  imgpath: StaticImageData;
  modele: string;
  prix: number;
}

export const Vehicule: React.FC<VehiculeProps> = ({ imgpath, modele, prix }) => {
  return (
    <div className="vehicule shadow-sm mt-4" >
      <div className="relative w-full h-64">
        <Image src={imgpath} alt={modele} layout="fill" objectFit="cover" className="rounded" />
      </div>
      <div className="features p-4">
        <h3 className="text-lg font-semibold">{modele}</h3>
        <div className="Tarif mt-2">
          <p className="text-gray-500 text-xl">Chevrolet</p>
          <p className="price text-xl font-bold">{prix} FCFA<span className="text-sm font-normal">/day</span></p>
        </div>
        <div className="boutons mt-4 flex inline-flex  justify-center items-center space-x-2">
        <Link href={`/Car?name=${encodeURIComponent(modele)}&prix=${prix}`}>
            <button className="btn-blue w-full flex-1 py-2 px-4 rounded bg-blue-500 text-white">Louer </button>
          </Link>
          <Link href={`/Car?name=${encodeURIComponent(modele)}&prix=${prix}`}>
          <button className="btn-orange w-full flex-1 py-2 px-4 rounded bg-orange-500 text-white">Détails</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
