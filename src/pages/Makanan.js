import './Makanan.css';

import NasiKotak from '../assets/nasikotak.png';
import Siomay from '../assets/siomay.png';
import Dimsum from '../assets/dimsum.png';
import IceCream from '../assets/icecream.png';

const Makanan=()=>{
    return(
        <section className='makanan'>
            <div className='makanan-container'>
                <div className='makanan-card-item'>
                    <img src={NasiKotak} alt='' className='makanan-image'/>
                    <div className='makanan-title'>Nasi Kotak</div> 
                </div>

                <div className='makanan-card-item'>
                    <img src={Siomay} alt='' className='makanan-image'/>
                    <div className='makanan-title'>Siomay</div> 
                </div>

                <div className='makanan-card-item'>
                    <img src={Dimsum} alt='' className='makanan-image'/>
                    <div className='makanan-title'>Dimsum</div> 
                </div>

                <div className='makanan-card-item'>
                    <img src={IceCream} alt='' className='makanan-image'/>
                    <div className='makanan-title'>Ice Cream</div> 
                </div>
            </div>
        </section>
    )
}

export default Makanan;