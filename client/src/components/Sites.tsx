import Portfolio from '../imgs/portfolio_resized.png'
import Blank from '../imgs/blank_image.png'

const Sites = () => {
  return (
    <section className="flex flex-col md:flex-row md:flex-between items-center justify-around" id="sites">
      <figure className="my-10 m-10 sm:ml-0 sm:mr-0 md:m-10">
        <img src={Blank} alt="Blank image for now.." className="shadow-lg cursor-pointer hover:shadow-indigo-500/40 rounded" />
        <figcaption className="font-inter font-light text-sm mt-5">
          <a href="https://caronasburguer.com.br/" target="_blank"><b>Caronas Burguer</b></a> — Implementação responsiva no site da hamburgueria.
        </figcaption>
      </figure>

      <figure className="my-10 m-10 sm:ml-0 sm:mr-0 md:ml-0">
        <img src={Portfolio} className="shadow-lg cursor-pointer hover:shadow-indigo-500/40 rounded" alt="Marcos's Portfolio" width={680} height={270}/>
        <figcaption className="font-inter font-light text-sm mt-5">
          <a href="https://portfolio-marcos-c1.vercel.app/" target="_blank"><b>Portfolio do Marcos </b></a> — Um site criado para dispor os projetos do Marcos.
        </figcaption>
      </figure>
    </section>
  )
}

export default Sites
