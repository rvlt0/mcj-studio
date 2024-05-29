import { faInstagram, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Footer = () => {
  const company = {
    name: "MCJ Studio Inc",
    //xx.xxx.xxx/xxxx-xx
    cnpj: "",
    location: "Brasília - DF"
  }
  return (
    <footer id="footer">
      <div className="grid grid-cols-1  md:gap-0 justify-items-center md:grid-cols-2">
        <div className="self-center">
          <h3 className="text-2xl font-newsreader uppercase mt-10 md:mt-0 font-bold">{company.name}</h3>
          {company.cnpj.length > 0 && <h6>CNPJ: {company.cnpj}</h6>}
          <small>Brasília - DF</small>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl pl-5 mt-10 md:mt-0 font-bold">Contato</h3>
          <a className="my-5 mt-5 cursor-pointer" href="https://wa.me/61998099902" target="_blank">
            <FontAwesomeIcon className="fa-xl px-2" icon={faWhatsapp} />
            (61) 9 9451-5768
          </a>
          <a href="mailto:mcj.studios1@gmail.com" className="cursor-pointer">
            <FontAwesomeIcon className="fa-xl px-2" icon={faEnvelope} />
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
