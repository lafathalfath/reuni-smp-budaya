import './Panitia.css';
import Lanny from '../assets/lanny.png';
import Gunardi from '../assets/gunardi.png';
import Wahyuni from '../assets/wahyuni.png';
import Siti from '../assets/siti.png';
import Monita from '../assets/monita.png';
import Tine from '../assets/tine.png';
import Susi from '../assets/susi.png';
import Dewi from '../assets/dewi.png';
import Iwan from '../assets/iwan.png';
import Ramadhan from '../assets/ramadhan.png';

const Panitia=()=>{
    return(
        <section className='panitia'>
            <div className='panitia-container'>
                <div className='panitia-card'>
                    <img src={Lanny} alt='' className='panitia-image'/>
                    <div className='panitia-card-title'>
                        <span>Ketua Pelaksana</span><br/>
                        Lanny Zakir
                    </div>
                    <a href='https://wa.me/6281398608725' target='_blank' rel='noreferrer noopener' className='panitia-number'>081398608725</a>
                </div>

                <div className='panitia-card'>
                    <img src={Gunardi} alt='' className='panitia-image'/>
                    <div className='panitia-card-title'>
                        <span>Wakil Ketua Pelaksana</span><br/>
                        Gunardi
                    </div>
                    <a href='https://wa.me/6285810715366' target='_blank' rel='noreferrer noopener' className='panitia-number'>085810715366</a>
                </div>
            </div>

            <div className='panitia-container'>
                <div className='panitia-card'>
                    <img src={Wahyuni} alt='' className='panitia-image'/>
                    <div className='panitia-card-title'>
                        <span>Bendahara</span><br/>
                        Wahyuni Astuti
                    </div>
                    <a href='https://wa.me/6285773740036' target='_blank' rel='noreferrer noopener' className='panitia-number'>085773740036</a>
                </div>

                <div className='panitia-card'>
                    <img src={Siti} alt='' className='panitia-image'/>
                    <div className='panitia-card-title'>
                        <span>Panitia</span><br/>
                        Siti Ma'rifah
                    </div>
                    <a href='https://wa.me/6285775279618' target='_blank' rel='noreferrer noopener' className='panitia-number'>085775279618</a>
                </div>

                <div className='panitia-card'>
                    <img src={Monita} alt='' className='panitia-image'/>
                    <div className='panitia-card-title'>
                        <span>Panitia</span><br/>
                        Monita
                    </div>
                    <a href='https://wa.me/6289696199156' target='_blank' rel='noreferrer noopener' className='panitia-number'>089696199156</a>
                </div>

                <div className='panitia-card'>
                    <img src={Tine} alt='' className='panitia-image'/>
                    <div className='panitia-card-title'>
                        <span>Panitia</span><br/>
                        Tine Runtuwene
                    </div>
                    <a href='https://wa.me/6285242284395' target='_blank' rel='noreferrer noopener' className='panitia-number'>085242284395</a>
                </div>

                <div className='panitia-card'>
                    <img src={Susi} alt='' className='panitia-image'/>
                    <div className='panitia-card-title'>
                        <span>Panitia</span><br/>
                        Susi
                    </div>
                    <a href='https://wa.me/6287785746735' target='_blank' rel='noreferrer noopener' className='panitia-number'>087785746735</a>
                </div>

                <div className='panitia-card'>
                    <img src={Dewi} alt='' className='panitia-image'/>
                    <div className='panitia-card-title'>
                        <span>Panitia</span><br/>
                        Dewi
                    </div>
                    <a href='https://wa.me/6285933582022' target='_blank' rel='noreferrer noopener' className='panitia-number'>085933582022</a>
                </div>

                <div className='panitia-card'>
                    <img src={Iwan} alt='' className='panitia-image'/>
                    <div className='panitia-card-title'>
                        <span>Panitia</span><br/>
                        Iwan Choey'99
                    </div>
                    <a href='https://wa.me/6281717158777' target='_blank' rel='noreferrer noopener' className='panitia-number'>081717158777</a>
                </div>

                <div className='panitia-card'>
                    <img src={Ramadhan} alt='' className='panitia-image'/>
                    <div className='panitia-card-title'>
                        <span>Panitia</span><br/>
                        Ramadhan Hidayat
                    </div>
                    <a href='https://wa.me/62818773479' target='_blank' rel='noreferrer noopener' className='panitia-number'>0818773479</a>
                </div>
            </div> 
        </section>
    )
}

export default Panitia;