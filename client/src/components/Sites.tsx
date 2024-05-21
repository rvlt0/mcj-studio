import Portfolio from '../imgs/portfolio_resized.png'
import Blank from '../imgs/blank_image.png'

const Sites = () => {
  return (
    <section className="flex flex-row flex-between items-center justify-center">
      <figure className="mr-10">
        <img src={Blank} alt="Blank image for now.." width={500} height={10} />
        <figcaption className="font-inter font-light text-sm mt-5">
          <a href="https://caronasburguer.com.br/" target="_blank"><b>Caronas Burguer</b></a> — Implementação responsiva no site da hamburgueria.
        </figcaption>
      </figure>

      <figure>
        <img src={Portfolio} className="rounded" alt="Marcos's Portfolio" width={680} height={270}/>
        <figcaption className="font-inter font-light text-sm mt-5">
          <a href="https://portfolio-marcos-c1.vercel.app/" target="_blank"><b>Portfolio do Marcos </b></a> — Um site criado para dispor os projetos do Marcos
        </figcaption>
      </figure>
    </section>
  )
}

export default Sites
