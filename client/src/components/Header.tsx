import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faGithub  } from "@fortawesome/free-brands-svg-icons"
const Header = () => {
  return (
    <header className="flex p-5 flex-row justify-between">
    <h1 className="font-newsreader font-medium text-2xl">MCJ Studio</h1>
      <ul className="flex flex-row px-20 font-regular text-base">
        <li>Início</li>
        <li>Sobre nós</li>
        <li>Contato</li>
        <li>Avaliações</li>
        <ul id="social-medias">
          <FontAwesomeIcon className="fa-xl px-5 cursor-pointer" icon={faGithub} />
          <FontAwesomeIcon className="fa-xl cursor-pointer" icon={faInstagram} />
        </ul>
      </ul>
    </header>
  )
}

export default Header
