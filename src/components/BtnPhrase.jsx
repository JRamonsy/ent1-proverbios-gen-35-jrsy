import getRandomFromArray from "../utils/getRandomFromArray"
import phrases from '../utils/phrases.json'
import arrImages from '../utils/arrImages.json'
import './Styles/BtnPhrase.css'

const BtnPhrase = ({ setPhraseRandom, setImageSelected }) => {
  
  const handleClick = () => {
    const phrase = getRandomFromArray(phrases)
    setPhraseRandom(phrase)

    const background = getRandomFromArray(arrImages)
    setImageSelected(background)
    
  }
  return (
    <button className="card__btn" onClick={handleClick}>Que tienes hoy para mi</button>
  )
}

export default BtnPhrase