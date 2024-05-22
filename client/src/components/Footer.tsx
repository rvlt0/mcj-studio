import { faInstagram, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="grid grid-cols-1 gap-20 md:gap-0 justify-items-center md:grid-cols-2">
        <div>
          <h6>MCJ Studio Inc</h6>
          <h6>CNPJ: xx.xxx.xxx/xxxx-xx</h6>
          <h6>Brasília - DF</h6>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">Contate-nos</h3>
          <a className="ml-5 my-5 mt-5 cursor-pointer">
            <FontAwesomeIcon className="fa-xl px-2" icon={faWhatsapp}/>
            (61) 9 xxxx-xxxx
          </a>
          <a href="mailto:mcj.studios1@gmail.com" className="ml-5 cursor-pointer">
            <FontAwesomeIcon className="fa-xl px-2" icon={faEnvelope}/>
            mcj.studios1@gmail.com
          </a>
        </div>
      </div>
      <div className="flex justify-center flex-col mt-20">
        <div className="self-center">
          <a href="https://github.com/MCJ-Studio" target="_blank">
            <FontAwesomeIcon className="fa-xl px-5 cursor-pointer" icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/mcj.studios1/" target="_blank">
            <FontAwesomeIcon className="fa-xl cursor-pointer" icon={faInstagram} />
          </a>
        </div>
        <span className="py-5 self-center">
          Todos os direitos reservados à MCJ Studio. &copy;
        </span>
      </div>
    </footer>
  )
}

export default Footer
