import Jorel from '../imgs/dev-icons/joel.png'
import Marcos from '../imgs/dev-icons/rvlt.png'
import Cristian from '../imgs/dev-icons/cristian.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
const AboutUs = () => {
  return (
    <section className="grid md:grid-cols-2  p-10 my-20" id="us">
      <div className="">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-newsreader">Nossa equipe</h2>
          <small className="font-inter font-semibold mt-2">UM TRIETO</small>
        </div>
        <div className="my-20">
          <p className="font-inter text-xl my-10">
            A MCJ Studio é uma empresa micro-empreendedora voltada para a prestação de serviços na área da tecnologia, fundada por uma equipe de desenvolvedores experientes no mundo da programação. Com uma paixão por criar soluções inovadoras, a empresa foca em desenvolvimento de software sob medida para pequenas e médias empresas.</p>
          <p className="font-inter text-xl">
            Nos alçamos ao mundo do empreendedorismo para fornecer o nosso conhecimento como serviço no intuito de entregar a melhor aplicação técnica em forma de produto para os nossos clientes.
          </p>
          <p className="font-inter text-xl font-bold my-10">
            Como pretendemos fazer isso?
          </p>
          <p className="font-inter text-xl">
            Usando as ferramentas de desenvolvimento ao nosso favor para atender as necessidades atribuídas, alinhando o design desejado em consonância com as regras de negócio da empresa instituinte.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center w-fit p-5 px-10 rounded">
          <img src={Jorel} width={150} className="rounded"></img>
          <span className="font-roboto pt-3">Joel Campos</span>
          <span className="font-bold text-indigo-400 font-roboto text-gray">FRONTEND DEVELOPER</span>
          <div className="flex flex-row pt-3">
            <a href="https://github.com/joelcmques" target='_blank'>
              <FontAwesomeIcon icon={faGithub} className="fa-xl pr-3 cursor-pointer" />
            </a>
            <FontAwesomeIcon icon={faLinkedin} className="fa-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col xs:self-center items-center lg:ml-10 lg:self-end my-10 md:my-0 w-fit rounded">
          <img src={Marcos} width={140} className="rounded mr-3" ></img>
          <div className="flex flex-col items-center">
            <span className="font-roboto pt-3">Marcos Campos</span>
            <span className="font-bold text-indigo-400 font-roboto text-gray">BACKEND DEVELOPER</span>
            <div className="flex flex-row pt-3">
              <a href="https://github.com/marcos-c1" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="fa-xl pr-3 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/marcos-c1" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="fa-xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-fit p-5 px-10 rounded">
          <img src={Cristian} width={150} className="rounded"></img>
          <span className="font-roboto pt-3">Christian Mateus</span>
          <span className="font-bold text-indigo-400 font-roboto text-gray">MARKETING LEAD</span>
          <div className="flex flex-row pt-3">
            <a href="https://www.instagram.com/_christian_mateus_/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="fa-xl pr-3 cursor-pointer" />
            </a>
            <FontAwesomeIcon icon={faLinkedin} className="fa-xl cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
