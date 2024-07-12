import React from 'react'

const page = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-100">


    <div className='content text-blue-500 text-center pt-6'>
      <h4>Nos services</h4>
  </div>

<main className="container mx-auto px-4 py-8">
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Location de Voitures</h2>
    <p className="text-gray-700 mb-4">
      Nous offrons une large gamme de voitures à louer, des compactes économiques aux berlines de luxe. Toutes nos voitures sont bien entretenues et prêtes à vous emmener là où vous avez besoin.
    </p>
    <img src="/images/car-rental.jpeg" alt="Location de voitures" className="w-full h-auto rounded-md shadow-md" />
  </section>
  
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Location de Camionnettes</h2>
    <p className="text-gray-700 mb-4">
      Besoin de transporter des marchandises ou de déménager ? Nos camionnettes sont parfaites pour le travail. Louez une camionnette fiable à un prix abordable.
    </p>
    <img src="/images/van-rental.jpeg" alt="Location de camionnettes" className="w-full h-auto rounded-md shadow-md" />
  </section>
  
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Location de Véhicules de Luxe</h2>
    <p className="text-gray-700 mb-4">
      Faites-vous plaisir avec nos véhicules de luxe. Parfaits pour les occasions spéciales ou simplement pour se faire plaisir. Découvrez notre flotte de véhicules haut de gamme.
    </p>
    <img src="/images/luxury-rental.jpeg" alt="Location de véhicules de luxe" className="w-full h-auto rounded-md shadow-md" />
  </section>
  
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Location de Minibus</h2>
    <p className="text-gray-700 mb-4">
      Voyagez en groupe avec nos minibus spacieux. Idéal pour les voyages d'affaires, les sorties en famille ou les excursions entre amis.
    </p>
    <img src="/images/minibus-rental.jpeg" alt="Location de minibus" className="w-full h-auto rounded-md shadow-md" />
  </section>
</main>
</div>

</div>
  )
}

export default page