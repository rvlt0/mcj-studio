import Portfolio from '../imgs/portfolio_resized.png'
import CaronasBurguer from '../imgs/caronas-v2.png'
import Blank from '../imgs/blank_image.png'

const Sites = () => {
  return (
    <section className="grid xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-20 p-10 justify-items-center align-middle	 justify-center items-center" id="sites">
      <a href="https://caronas-burguer-v2.vercel.app/" target="_blank">
        <figure className="my-10 m-10 sm:ml-0 sm:mr-0 md:m-10">
          <img src={CaronasBurguer} alt="Caronas Burguer website" className="shadow-lg cursor-pointer hover:shadow-orange rounded" />
          <figcaption className="font-inter font-light text-sm mt-5">
            <b>Caronas Burguer</b> — Criação de um site para a hamburgueria local.
          </figcaption>
        </figure>
      </a>
      <a href="https://portfolio-marcos-c1.vercel.app/" target="_blank">
        <figure className="my-10 m-10 sm:ml-0 sm:mr-0 md:ml-0">
          <img src={Portfolio} className="shadow-lg cursor-pointer hover:shadow-indigo rounded" alt="Marcos's Portfolio" width={680} height={270} />
          <figcaption className="font-inter font-light text-sm mt-5">
            <b>Portfolio do Marcos </b> — Um site criado para dispor os projetos do Marcos.
          </figcaption>
        </figure>
      </a>
    </section>
  )
}

export default Sites
