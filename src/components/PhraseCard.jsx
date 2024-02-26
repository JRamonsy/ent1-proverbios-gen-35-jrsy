import './Styles/PhraseCard.css'
import './Styles/BtnPhrase.css'

const PhraseCard = ({ phraseRandom }) => {

  const {phrase} = phraseRandom

  console.log(phrase)
	return (
    <p className='card__phrase'>{ phrase }</p>
  )
}

export default PhraseCard