import './Rundown.css';

const Rundown=()=>{
    return(
        <section className='rundown'>
            <div className='table-container'>
                <table>
                    <tr>
                        <th>No</th>
                        <th>Waktu</th>
                        <th>Acara</th>
                        <th>Keterangan</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>12.00</td>
                        <td>Registrasi</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>14.00</td>
                        <td>Inti Acara</td>
                        <td>
                            <ul>
                                <li>Pembukaan Acara</li>
                                <li>Sambutan</li>
                                <li>Kesan dan Pesan</li>
                                <li>Tayangan Video</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>15.30</td>
                        <td>Hiburan</td>
                        <td>Hiburan dengan penampilan Band Alumni</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>16.00</td>
                        <td>Fun Games</td>
                        <td>Fun Games dan pembagian Door Prize</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>17.00</td>
                        <td>Cindera Mata</td>
                        <td>Cindera Mata dibagikan kepada pihak sekolah</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>17.30</td>
                        <td>Apresiasi</td>
                        <td>Ucapan Terimakasih dari seluruh panitia</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>18.00</td>
                        <td>Foto Bersama</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>18.30</td>
                        <td>Penutupan Acara</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>19.00</td>
                        <td>Acara Bebas</td>
                        <td>Acara Bebas dengan pertunjukan DJ</td>
                    </tr>
                </table>
            </div>
        </section>
    )
}

export default Rundown;