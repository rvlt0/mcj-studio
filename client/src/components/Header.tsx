import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons"
import Logo from "../imgs/logo.png"
import { useEffect, useState } from "react"

const Header = () => {
  const [theme, setTheme] = useState('')
  const root = document.getElementById('root')
  const classes: string[] = ["bg-white", "text-black", "dark:bg-black", "dark:text-white", "duration-300", "ease-in"]

  useEffect(() => {
    root?.classList.add(...classes)
    toggleTheme()
  }
    , [root])

  function toggleTheme() {
    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light")
      document.documentElement.classList.add("dark")
      setTheme('dark')
    } else if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      setTheme('light')
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add("light")
        setTheme('light')
      } else {
        document.documentElement.classList.add("dark")
        setTheme('dark')
      }
    }
  }

  return (
    <header className="fixed text-black items-center dark:text-white text-nowrap backdrop-blur-sm sm:backdrop-blur-none top-0 border-b-2 sm:border-0 md:border-0 w-full sm:relative flex p-5 flex-row md:justify-between" id="inicio">
      <div className="flex flex-row">
        <a href="inicio" target="_self"><img src={Logo} width={40} height={40} className="sm:hidden shadow-2xl bg-midnight  rounded relative mr-5"></img></a>
        <a href="inicio" target="_self">
          <h1 className="hidden sm:block font-newsreader font-medium text-2xl select-none	hover:cursor-pointer p-1 px-2">
            MCJ Studio
          </h1>
        </a>
      </div>
      <ul className="hidden sm:flex flex-row px-20 font-regular text-base">
        <li className="decoration-white dark:decoration-black hover:decoration-black dark:hover:decoration-white"><a href="#us">Sobre nós</a></li>
        <li className="decoration-white dark:decoration-black hover:decoration-black dark:hover:decoration-white"><a href="#footer">Contato</a></li>
        <li className="decoration-white dark:decoration-black hover:decoration-black dark:hover:decoration-white"><a href="#project">Projetos</a></li>
        <ul className="hidden md:flex flex-row" id="social-medias">
          <a href="#">
            {theme == 'light' ?
              (<FontAwesomeIcon onClick={toggleTheme} className="fa-xl px-5 cursor-pointer" icon={faMoon} />) : (<FontAwesomeIcon onClick={toggleTheme} className="fa-xl px-5 cursor-pointer" icon={faSun} />)
            }
          </a>
          <a href="https://github.com/MCJ-Studio" target="_blank">
            <FontAwesomeIcon className="fa-xl px-5 cursor-pointer" icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/mcj.studios1/" target="_blank">
            <FontAwesomeIcon className="fa-xl cursor-pointer" icon={faInstagram} />
          </a>
        </ul>
      </ul>
      <ul className="sm:hidden absolute right-0 mr-5" id="social-medias">
        <a href="#">
          {theme == 'light' ?
            (<FontAwesomeIcon onClick={toggleTheme} className="fa-xl px-5 cursor-pointer" icon={faMoon} />) : (<FontAwesomeIcon onClick={toggleTheme} className="fa-xl px-5 cursor-pointer" icon={faSun} />)
          }
        </a>
        <a href="https://github.com/MCJ-Studio" target="_blank">
          <FontAwesomeIcon className="fa-xl px-5 cursor-pointer" icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/mcj.studios1/" target="_blank">
          <FontAwesomeIcon className="fa-xl cursor-pointer" icon={faInstagram} />
        </a>
      </ul>
    </header>
  )
}

export default Header
