import './index.css'
import ScrollReveal from 'scrollreveal';
import Samsung from '../../public/samsung.png'
import Lenovo from '../../public/lenovo.png'
import Microsoft from '../../public/microsoft.png'
import Dell from '../../public/dell.png'
import Formatation from '../../public/formatation.jpg'
import Hadware from '../../public/hadware.jpg'
import Programings from '../../public/programas.jpg'
import Preventivas from '../../public/preventivas.jpg'
import { useEffect } from 'react';

function MainContent() {
    useEffect(() => {
        // Inicializa o ScrollReveal dentro do useEffect
        const reveall = ScrollReveal({
            reset: true, // Se quiser que os efeitos sejam reiniciados após saírem da tela
        });

        // Coloca as revelações dentro do useEffect
        reveall.reveal('.text-h1-efect', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 500
        });

        // Adicionando mais revelações, se necessário
        reveall.reveal('.text-apre-efect', {
            duration: 2000,
            distance: '10rem',
            origin: 'top',
            delay: 800
        });

        reveall.reveal('.about', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        })

        reveall.reveal('.p1', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500
        })

        reveall.reveal('.p2', {
            duration: 2000,
            distance: '10rem',
            origin: 'rigth',
            delay: 1000
        })

        reveall.reveal('.p3', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 1500
        })

        reveall.reveal('.p4', {
            duration: 2000,
            distance: '10rem',
            origin: 'rigth',
            delay: 2000
        })

        reveall.reveal('.dell', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 500
        })
        reveall.reveal('.micro', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 1000
        })
        reveall.reveal('.samsung', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 1500
        })
        reveall.reveal('.lenovo', {
            duration: 2000,
            distance: '10rem',
            origin: 'bottom',
            delay: 2000,
        })
        reveall.reveal('.job', {
            duration: 2000,
            distance: '10rem',
            origin: 'left',
            delay: 500,
        })
        reveall.reveal('.job-text', {
            duration: 2000,
            distance: '10rem',
            origin: 'rigth',
            delay: 1000,
        })
        // Retorna uma função de cleanup, se necessário, para garantir que o ScrollReveal seja limpo quando o componente for desmontado
        return () => {
            // Não é estritamente necessário aqui, mas pode ser útil se você quiser limpar o ScrollReveal ao desmontar o componente
            // Isso não é obrigatório a menos que você queira "limpar" os efeitos no desmontar
            // ScrollReveal não tem um método específico para limpar, mas pode ser útil se você manipular outras bibliotecas
        };
    }, []); // O array vazio [] garante que o useEffect rode uma vez após o componente ser montado

    return (
        <>
            <main className="container-fluid container-main">
                <section className="section-one   ">
                    <div className="row">
                        <div className='apre'>

                            <h1 className='text-h1-efect' >
                                QUANTO CUSTA SEU O TEMPO?
                            </h1>
                            <span className='text-apre-efect'>
                                Deixe que nos preocupamos com a sua T.I e use seu tempo para <br />
                                fazer o que realmente você precisa fazer: cuidar do seu negócio.
                            </span>
                            <p className='text-apre-efect'>
                                Com um portfólio desenvolvido para atender a sua necessidade, a iTech atua na vanguarda dá <br />
                                tecnologia, lhe entregando a confiabilidade e  a disponibilidade que você sempre esperou.
                            </p>
                            <div className='whatssap'>
                                <div className="whatssap">
                                    <button class="custom-btn btn-16" onClick={() => window.open(
                                        'https://wa.me/5591993325636?text=Olá! Estamos felizes em receber você. A iTech é especializada em formatação, manutenção de equipamentos, troca de peças, consultoria de TI e criação de sites. Estamos aqui para ajudar a melhorar a performance do seu negócio com soluções tecnológicas de alta qualidade.', '_blank')}>
                                        WhatsApp
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                <section className="container-fluid section-two" id='about'>
                    <div className='about'>
                        <h2 >Sobre Nós</h2>
                        <p className='p-about'>

                            Empresa especializada em consultoria e soluções na área tecnica da Informação. <br />
                            Nossos serviços seguem recomendações, melhores praticas e padrões de gestão  <br />
                            Nossos profissionais recebem os melhores treinamento para lidar com os seus problemas  <br />
                        </p>
                    </div>
                </section>
                <section className='section-three' >
                    <div className="row">
                        <div>
                            <h2>Brands</h2>
                        </div>
                        <div className="logos " >
                            <div >
                                <img src={Dell} alt="dell" className='imgs-logo dell' />
                            </div>
                            <div >
                                <img src={Microsoft} alt="microsoft" className='imgs-logo micro' />
                            </div>
                            <div >
                                <img src={Samsung} alt="samsung" className='imgs-logo samsung' />
                            </div>
                            <div >
                                <img src={Lenovo} alt="lenovo" className='imgs-logo lenovo' />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-fuor'>
                    <div className='ps' >
                        <p className='p1'>Estamos presentes;</p> <br />
                        <p className='p2'>Visualizamos o futuro;</p> <br />
                        <p className='p3'>Virtualizamos oportunidades;</p> <br />
                        <p className='p4'>Proporcionamos conquistas;</p>
                    </div>
                </section>
                <section className=" section-five">
                    <div >
                        <div className='text-secFive' id='our'>
                            <h2 className='job'>Sobre o nosso Trabalho</h2>
                            <p className='job-text'>
                                A Itech é uma empresa especializada em soluções completas de tecnologia para empresas e usuários finais. <br />
                                Com uma equipe qualificada e dedicada, oferecemos serviços que abrangem desde a manutenção e formatação de computadores, <br />
                                até consultoria especializada em Tecnologia da Informação (TI) e criação de sites personalizados, <br />
                                focando sempre na excelência e inovação para atender às necessidades específicas de cada cliente. <br />
                                Nosso compromisso é garantir que você ou sua empresa tenha infraestrutura tecnológica de qualidade, <br />
                                que seja segura, eficiente e alinhada às melhores práticas do mercado.
                            </p>
                        </div>
                        <h2 id='services'>Serviços</h2>
                        <div className=" cards-container">
                            <div className="card">
                                <div className='box-img' >
                                    <img src={Hadware} alt="Imagem-1" className='imagem-card' />
                                </div>
                                <div className='text-card conteudo'>
                                    <h2>Upgrades de Hardware</h2>
                                    <p>
                                        Diagnóstico e substituição de peças: Se o seu computador ou notebook estiver apresentando problemas de hardware,
                                        oferecemos diagnóstico preciso e substituição de peças.

                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className='box-img' >
                                    <img src={Programings} alt="Imagem-1" className='imagem-card' />
                                </div>
                                <div className='text-card conteudo'>
                                    <h2>Instalação e configuração</h2>
                                    <p>
                                        Instalamos e configuramos sistemas operacionais (Windows),
                                        garantindo que todos os drivers e programas essenciais estejam
                                        corretamente instalados e funcionando.

                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className='box-img' >
                                    <img src={Preventivas} alt="Imagem-1" className='imagem-card' />
                                </div>
                                <div className='text-card conteudo'>
                                    <h2>Consultoria de TI</h2>
                                    <p>
                                        Ajudamos empresas a planejarem, implementarem e gerenciarem sua infraestrutura de TI,
                                        assegurando que os sistemas estejam alinhados com as
                                        necessidades e objetivos estratégicos do negócio.

                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className='box-img' >
                                    <img src={Formatation} alt="Imagem-1" className='imagem-card' />
                                </div>
                                <div className='text-card conteudo'>
                                    <h2>Formatação</h2>
                                    <p>
                                        Resolvemos problemas de lentidão,
                                        vírus, falhas de sistema ou desempenho,
                                        restaurando o seu dispositivo para um estado otimizado.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default MainContent