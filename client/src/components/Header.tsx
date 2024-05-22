import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faGithub  } from "@fortawesome/free-brands-svg-icons"
import Logo from "../imgs/logo.png"

const Header = () => {
  return (
    <header className="fixed text-nowrap backdrop-blur-sm sm:backdrop-blur-none top-0 border-b-2 sm:border-0 md:border-0 w-full sm:relative flex p-5 flex-row md:justify-between" id="inicio">
      <div className="flex flex-row">
        <img src={Logo} width={40} height={40} className="sm:hidden bg-black rounded relative mr-5"></img>
        <h1 className="hidden sm:block font-newsreader font-medium text-2xl">
          MCJ Studio
        </h1>
      </div>
      <ul className="hidden sm:flex flex-row px-20 font-regular text-base">
        <li className="white:decoration-white hover:underline hover:decoration-black duration-300 ease-in"><a href="#inicio">Início</a></li>
        <li className="white:decoration-white hover:underline hover:decoration-black"><a href="#us">Sobre nós</a></li>
        <li className="white:decoration-white hover:underline hover:decoration-black"><a href="#footer">Contato</a></li>
        <li className="white:decoration-white hover:underline hover:decoration-black"><a href="#project">Projetos</a></li>
        <ul className="hidden md:flex flex-row" id="social-medias">
          <a href="https://github.com/MCJ-Studio" target="_blank">
            <FontAwesomeIcon className="fa-xl px-5 cursor-pointer" icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/mcj.studios1/" target="_blank">
            <FontAwesomeIcon  className="fa-xl cursor-pointer" icon={faInstagram} />
          </a>
        </ul>
      </ul>
      <ul className="sm:hidden absolute right-0 mr-5" id="social-medias">
        <a href="https://github.com/MCJ-Studio" target="_blank">
          <FontAwesomeIcon className="fa-xl px-5 cursor-pointer" icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/mcj.studios1/" target="_blank">
          <FontAwesomeIcon  className="fa-xl cursor-pointer" icon={faInstagram} />
        </a>
      </ul>
    </header>
  )
}

export default Header
