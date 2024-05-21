import Jorel from '../imgs/joel-test.png'
import Marcos from '../imgs/marcos-test.png'
import Cristian from '../imgs/cristian-test.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
const AboutUs = () => {
  return (
    <section className="grid md:grid-cols-2 p-10 my-20">
      <div className="">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-newsreader">Nossa equipe</h2>
          <small className="font-inter font-semibold mt-2">UM TRIETO</small>
        </div>
        <div className="my-20">
          <p className="font-inter text-xl">
          Somos um time de desenvolvedores experientes no mundo da programação e nos alçamos ao mundo do empreendedorismo para fornecer o nosso conhecimento como serviço.
          </p>
          <p className="font-inter text-xl font-bold my-10">
            Como pretendemos fazer isso?
          </p>
          <p className="font-inter text-xl">
            Usando as ferramentas de desenvolvimento ao nosso favor para atender as necessidades dos clientes. Alinhando o design desejado em consonância com as regras de negócio.
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center">
          <img src={Jorel} width={150}></img>
          <span className="font-roboto pt-3">Joel Campos</span>
          <span className="font-roboto text-gray">FRONTEND DEVELOPER</span>
          <div className="flex flex-row pt-3">
            <FontAwesomeIcon icon={faGithub} className="fa-xl pr-3 cursor-pointer"/>
            <FontAwesomeIcon icon={faLinkedin} className="fa-xl cursor-pointer"/>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <img src={Marcos} width={150}></img>
          <div className="flex flex-col items-center">
            <span className="font-roboto pt-3">Marcos Campos</span>
            <span className="font-roboto text-gray">BACKEND DEVELOPER</span>
            <div className="flex flex-row pt-3">
              <FontAwesomeIcon icon={faGithub} className="fa-xl pr-3 cursor-pointer"/>
              <FontAwesomeIcon icon={faLinkedin} className="fa-xl cursor-pointer"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={Cristian} width={150}></img>
          <span className="font-roboto pt-3">Christian Mateus</span>
          <span className="font-roboto text-gray">MARKETING LEAD</span>
          <div className="flex flex-row pt-3">
            <FontAwesomeIcon icon={faGithub} className="fa-xl pr-3 cursor-pointer"/>
            <FontAwesomeIcon icon={faLinkedin} className="fa-xl cursor-pointer"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
