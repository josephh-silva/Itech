import './index.css'
import Phone from '../../public/phone.png'
import Address from '../../public/address.png'
import Email from '../../public/e-mail.png'
import Pc from '../../public/pc.png'
function Footer(){
    return(
        <div className="container-fluid container-g">
           <div className="row row-container">
                <div className="footer-confg col-4">
                    <div>
                        <img src={Phone} alt="Telefone" className='img-footer' />
                    </div>
                    <div className='text-footer-img'>
                        <p>Nos Ligue</p>
                        <span>91 9332-5636</span>
                    </div>
                </div>
                <div className="footer-confg col-4">
                    <div>
                        <img src={Email} alt="Email" className='img-footer'/>
                    </div>
                    <div className='text-footer-img'>
                        <p>Email</p>
                        <span>Itech13@gmail.com</span>
                    </div>
                </div>
                <div className="footer-confg col-4">
                    <div>
                        <img src={Address} alt="Endereço" className='img-footer' />
                    </div>
                    <div className='text-footer-img'>
                        <p>Nos encontre</p>
                        <span> Mangueirão</span>
                    </div>
                </div>
           </div>
           <hr />
           <div className="logo-footer">
            <div>
                <img src={Pc} alt="pc" className='pc-img' />
            </div>
            <div>
                <p>
                    Itech, a melhor solução <br />para o seu problema
                </p>
            </div>
           </div>
        </div>
    )
}
export default Footer