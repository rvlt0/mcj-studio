import ICard from '../types/Card';
import Card from './Card';

const Project = () => {
  const projects: ICard[] = [
    {title: "Caronas Burguer", description: "Um site construido em PHP para uma hamburgueria local."},
    {title: "Portfolio", description: "Um portfolio feito usando tecnologias como VueJS para a produção de um portfolio."},
  ]

  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 p-10 my-20" id="project">
      <div className="grid md:grid-cols-1 xl:grid-cols-2 justify-center grid-rows-auto mb-20 md:mr-20">
        {projects.map((p, i) => <Card card={p} key={i}/>)}
      </div>
      <div>
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-newsreader">Projetos</h2>
          <small className="font-inter font-semibold mt-2">NOSSO TRABALHO</small>
        </div>
        <div className="my-20">
          <p className="font-inter text-xl">
            No momento, temos feitos alguns projetos como <i>free-lancer</i> para os estabelecimentos locais com o objetivo de mostrar o nosso trabalho.
          </p>
        </div>
      </div>
    </section>

  )
}

export default Project
