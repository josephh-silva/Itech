import './index.css'
import Pc from '../../public/pc.png'
function Navbar (){
    return(
        <>
        <nav className="row  navbar">
            <div className="row coluns-edit">
                <div className="col-2 logo-img">
                    <img src={Pc} alt="Img" className='pc' />
                    <span >ITECH</span>
                </div>
                <div className="col-4 links">
                    <a href="#about">Sobre nós</a>
                    <a href="#our">Sobre nosso trabalho</a>
                    <a href="#services">Serviços</a>
                </div>
                
            </div>
        </nav>
        </>
    )
}
export default Navbar