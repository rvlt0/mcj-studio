import { faInstagram, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Footer = () => {
  return (
    <footer className="">
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2">
        <div>
          <h6>MCJ Studio Inc</h6>
          <h6>CNPJ: xx.xxx.xxx/xxxx-xx</h6>
          <h6>Brasília - DF</h6>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">Contate-nos</h3>
          <a className="ml-5 my-5 mt-5">
            <FontAwesomeIcon className="fa-xl px-2" icon={faWhatsapp}/>
            (61) 9 xxxx-xxxx
          </a>
          <a className="ml-5">
            <FontAwesomeIcon className="fa-xl px-2" icon={faEnvelope}/>
            mcjstudios@gmail.com
          </a>
        </div>
      </div>
      <div className="flex justify-center flex-col mt-20">
        <div className="self-center">
          <FontAwesomeIcon className="fa-xl px-5 cursor-pointer" icon={faGithub} />
          <FontAwesomeIcon className="fa-xl cursor-pointer" icon={faInstagram} />
        </div>
        <span className="py-5 self-center">
          Todos os direitos reservados à MCJ Studio. &copy;
        </span>
      </div>
    </footer>
  )
}

export default Footer
