import Caronas from '../imgs/caronas.png'
import Portfolio from '../imgs/tesseract-logo.svg'
import ICard from '../types/Card'

const Card = ({ card }: { card: ICard }) => {
  return (
    <a
      href={card.src}
      target="_blank"
      className={
        card.title == 'Caronas Burguer' ?
          "flex rounded flex-col items-center shadow-xl cursor-pointer duration-300 ease-in shadow-2xl dark:shadow-2xl hover:text-black dark:hover:text-white hover:shadow-orange shadow-black-500/40 max-w-64 md:mr-5 md:ml-5 mb-8" :
          "flex rounded flex-col items-center shadow-xl cursor-pointer duration-300 ease-in shadow-2xl dark:shadow-2xl hover:text-black dark:hover:text-white hover:shadow-indigo shadow-black-500/40 max-w-64 md:mr-5 md:ml-5 mb-8"
      }
      id="card">
      <div className="flex mt-10 rounded p-5">
        {card.title == 'Caronas Burguer' ? (
          <img src={Caronas} className="self-center" alt={card.title} width={120} />
        ) : (
          <img src={Portfolio} className="self-center" alt={card.title} width={100} />
        )}
      </div>
      <h2 className="font-bold font-inter text-sm m-3">{card.title}</h2>
      <small className="p-5 font-regular font-inter mt-3">{card.description}</small>
    </a>
  )
}

export default Card
