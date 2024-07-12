import  {Swiper, SwiperSlide} from 'swiper/react'
import ClientCarousel from './ClientCarousel';

export const HappyClients = () => {
    return(
        <div className='m-10'>
            <div className='content text-blue-500 text-center pt-6'>
                <h4>Happy Clients</h4>
            </div>
            <ClientCarousel/>
        </div>
    );
}