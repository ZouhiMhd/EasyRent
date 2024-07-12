// export const Footer = () => {
//     return (
//         <>
// 		<section className="w-full">
//         <footer className="ftco-footer ftco-bg-dark ftco-section ">
//       <div className="containt">
//         <div className="flex row mb-5 justify-beween flex max-sm:flex-col  items-start gap-4">
//           <div className="col-md m-5">
//             <div className="ftco-footer-widget mb-4">
//               <h2 className="ftco-heading-2"><a href="#" className="logo">EASY<span>RENT</span></a></h2>
//               <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
//               <ul className="flex ftco-footer-social list-unstyled float-md-left float-lft mt-5">
//                 <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span className="icon-twitter"></span></a></li>
//                 <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span className="icon-facebook"></span></a></li>
//                 <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span className="icon-instagram"></span></a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="flex items-center col-md m-3">
//             <div className="ftco-footer-widget mb-4 ml-md-5">
//               <h2 className="ftco-heading-2">Information</h2>
//               <ul className="list-unstyled">
//                 <li><a href="#" className="py-2 d-block">About</a></li>
//                 <li><a href="#" className="py-2 d-block">Services</a></li>
//                 <li><a href="#" className="py-2 d-block">Term and Conditions</a></li>
//                 <li><a href="#" className="py-2 d-block">Best Price Guarantee</a></li>
//                 <li><a href="#" className="py-2 d-block">Privacy &amp; Cookies Policy</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-md m-3">
//              <div className="ftco-footer-widget mb-4">
//               <h2 className="ftco-heading-2">Customer Support</h2>
//               <ul className="list-unstyled">
//                 <li><a href="#" className="py-2 d-block">FAQ</a></li>
//                 <li><a href="#" className="py-2 d-block">Payment Option</a></li>
//                 <li><a href="#" className="py-2 d-block">Booking Tips</a></li>
//                 <li><a href="#" className="py-2 d-block">How it works</a></li>
//                 <li><a href="#" className="py-2 d-block">Contact Us</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-md m-3">
//             <div className="ftco-footer-widget mb-4">
//             	<h2 className="ftco-heading-2">Have a Questions?</h2>
//             	<div className="block-23 mb-3">
// 	              <ul>
// 	                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
// 	                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
// 	                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
// 	              </ul>
// 	            </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12 text-center">

//             <p>Copyright by Colorlib</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//     </section>
//      </>
//     )
// }

import React from 'react';

export const Footer = () => {
  return (
    <section className="w-full bg-black text-gray-300 font-serif"> {/* Assurez-vous que la classe de fonte est correcte */}
      <footer className="container mx-auto py-10">
        <div className="flex flex-wrap justify-between items-start mb-10">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold font-serif text-white">
                <a href="#" className="logo">Easy<span className="text-green-500">Rent</span></a>
              </h2>
              <p className="text-gray-400 mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="flex mt-5 space-x-4">
                <li><a href="#" className="text-gray-400 hover:text-white"><span className="icon-twitter"></span></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white"><span className="icon-facebook"></span></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-white">Information</h2>
              <ul className="mt-4">
                <li><a href="#" className="block py-2 text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="block py-2 text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="block py-2 text-gray-400 hover:text-white">Term and Conditions</a></li>
                <li><a href="#" className="block py-2 text-gray-400 hover:text-white">Best Price Guarantee</a></li>
                <li><a href="#" className="block py-2 text-gray-400 hover:text-white">Privacy & Cookies Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-white">Customer Support</h2>
              <ul className="mt-4">
                <li><a href="#" className="block py-2 text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="block py-2 text-gray-400 hover:text-white">Payment Option</a></li>
                <li><a href="#" className="block py-2 text-gray-400 hover:text-white">Booking Tips</a></li>
                <li><a href="#" className="block py-2 text-gray-400 hover:text-white">How it works</a></li>
                <li><a href="#" className="block py-2 text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-white">Have a Questions?</h2>
              <ul className="mt-4">
                <li className="flex items-start mb-4">
                  <span className="icon icon-map-marker text-green-500 mr-2"></span>
                  <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                </li>
                <li className="flex items-start mb-4">
                  <a href="tel:+23923929210" className="flex items-center text-gray-400 hover:text-white">
                    <span className="icon icon-phone text-green-500 mr-2"></span>
                    <span>+2 392 3929 210</span>
                  </a>
                </li>
                <li className="flex items-start">
                  <a href="mailto:info@yourdomain.com" className="flex items-center text-gray-400 hover:text-white">
                    <span className="icon icon-envelope text-green-500 mr-2"></span>
                    <span>info@yourdomain.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} EasyRent. All rights reserved. Designed by Colorlib.</p>
        </div>
      </footer>
    </section>
  );
};


