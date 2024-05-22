import Caronas from '../imgs/caronas.png'
import Terminal from '../imgs/tesseract-logo.png'
import ICard from '../types/Card'

const Card = ({card}: {card: ICard}) => {
  return (
    <div className="flex rounded flex-col items-center shadow-xl dark:shadow-indigo-500/40 shadow-black-500/40 max-w-64 md:mr-5 md:ml-5 mb-8" id="card">
      <div className="flex mt-10 rounded bg-whitegray p-5">
        {card.title == 'Caronas Burguer'? (
          <img src={Caronas} className="self-center" alt={card.title} width={120}/>
        ) : (
          <img src={Terminal} className="self-center" alt={card.title} width={120}/>
        )}
      </div>
      <h2 className="font-bold font-inter text-sm m-3">{card.title}</h2>
      <small className="p-5 font-regular font-inter mt-3">{card.description}</small>
    </div>
  )
}

export default Card
