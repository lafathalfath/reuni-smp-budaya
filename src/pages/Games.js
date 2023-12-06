import './Games.css';

import RebutKursi from '../assets/rebutkursi.png';
import Jaipong from '../assets/tebakgaya.png';
import Lagu from '../assets/tebak.png';

const Games=()=>{
    return(
        <section className='games'>
            <div className='games-container'>
                <div className='games-card-item'>
                    <img src={RebutKursi} alt='' className='games-image'/>
                    <div className='games-title'>Game Rebut Kursi</div>
                    <div className='games-desc'>Aksi cepat cepatan untuk merebut kursi</div>
                </div>

                <div className='games-card-item'>
                    <img src={Jaipong} alt='' className='games-image'/>
                    <div className='games-title'>Game Tebak Gaya</div>
                    <div className='games-desc'>Menebak gaya yang diperagakan</div>
                </div>

                <div className='games-card-item'>
                    <img src={Lagu} alt='' className='games-image'/>
                    <div className='games-title'>Game Berpacu Dalam Melodi</div>
                    <div className='games-desc'>Menebak lagu dari iringan meelodi</div>
                </div>

                <div className='games-card-item'>
                    <img src={Lagu} alt='' className='games-image'/>
                    <div className='games-title'>Game Tebak Lirik Lagu</div>
                    <div className='games-desc'>Melanjutkan lirik lagu yang diputar</div>
                </div>
            </div>
        </section>
    )
}

export default Games;