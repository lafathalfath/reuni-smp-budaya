import './Home.css';
import Slide1 from '../assets/grid 1.jpeg';
import Slide2 from '../assets/grid 2.jpeg';
import Location from '../assets/location.png';
import Calendar from '../assets/kalender.png';
import Merch from '../assets/merch.png';
import Permainan from '../assets/Games.png';
import Food from '../assets/Makan.png';
import Hiburan from '../assets/Hiburan.png';
import prev1 from '../assets/left 1.png';
import next1 from '../assets/right 1.png';

import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { Link } from 'react-router-dom';


const Home=()=>{

    const settingSlider1={
        currentslide: 0,
        slidecount: 2,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <FaChevronLeft className='slider-nav'/>,
        nextArrow: <FaChevronRight className='slider-nav'/>,
        responsive: [ 
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                },
            },
        ],
    }

    const settingSlider2={
        initialslide: 0,
        slidecount: 8,
        dots: false,
        // dotsClass: 'custom-dots-slider-2',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <img src={prev1} alt='' className='nav-arrow-slider-2'/>,
        nextArrow: <img src={next1} alt='' className='nav-arrow-slider-2'/>,
        // centerMode: true,
        className: 'slider-inner-item',
        responsive: [
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                }
            }
        ]
    }

    return(
        <section className='home'>
            <div className='slider-1'> 
                <FaChevronLeft className='slider-nav-dummy'/>
                <div>
                    <Slider {...settingSlider1}>
                        <img src={Slide1} alt=''/>
                        <img src={Slide2} alt=''/>
                    </Slider>
                </div>
                <FaChevronRight className='slider-nav-dummy'/>
            </div>

            <div className='slider-2'>
                <div>
                    <Slider {...settingSlider2} className='slider-bawah'>
                        <div className='slider-card-item'>
                            <div className='slider-card-title'>REUNI AKBAR KE I SMP Budaya Jakarta Angkatan 1987-2023</div>
                            <div className='slider-card-inner-text'>
                                Halo teman-teman reuni!<br/><br/>
                                Kami sangat bersemangat untuk mengadakan reuni yang menyenangkan dan penuh kenangan bersama kalian.
                                Agar acara ini dapa berjalan dengan lancar, kami membutuhkan dukungan dari semua peserta
                            </div>
                        </div>
                        
                        <div className='slider-card-item'>
                            <img src={Location} alt='' className='slider-card-image'/>
                            <a href='https://goo.gl/maps/MUcu1jjeZA7Va7Fv8' target='_blank' rel='noreferrer noopener'><ImLocation2 style={{color: 'red', fontSize: '18px'}}/>&ensp;Gedung Veteran Jakarta Jl. Raden Inten no 2</a>
                        </div>

                        <div className='slider-card-item'>
                            <img src={Calendar} alt='' className='slider-card-image'/>
                            <div>Sabtu, 11 November 2023<br/>14.00 s/d Selesai</div>
                        </div>

                        <div className='slider-card-item'>
                            <div className='slider-card-title'>What You Get?</div>
                            <img src={Merch} alt='' className='slider-card-image'/>
                            <div>Merchandise</div>
                        </div>

                        <div className='slider-card-item'>
                            <div className='slider-card-title'>What You Get?</div>
                            <img src={Permainan} alt='' className='slider-card-image'/>
                            <Link to='/games'>Games</Link>
                        </div>

                        <div className='slider-card-item'>
                            <div className='slider-card-title'>What You Get?</div>
                            <img src={Food} alt='' className='slider-card-image'/>
                            <Link to='/makanan'>Makanan</Link>
                        </div>

                        <div className='slider-card-item'>
                            <div className='slider-card-title'>What You Get?</div>
                            <img src={Hiburan} alt='' className='slider-card-image'/>
                            <Link to='/rundown'>Hiburan</Link>
                        </div>

                        <div className='slider-card-item htm'>
                            <div className='slider-card-title'>HTM 50k!</div>
                            <div style={{color: '#8b0506'}}>Yuk nikmati dan berdonasi sukarela untuk kebaikan bersama</div>
                        </div>
                    </Slider>
                </div>
                <br/>
                <br/>
                <div className='pendaftaran'>
                    <div>Link Pendaftaran:</div><br/>
                    <a href='https://bit.ly/Reuni-Akbar-Budaya-2023' target='_blank' rel='noreferrer noopener'>bit.ly/Reuni-Akbar-Budaya-2023</a>
                </div>
                
            </div>
        </section>
    )
}

export default Home;