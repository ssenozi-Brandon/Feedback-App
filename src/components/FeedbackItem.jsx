import { useContext } from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
  const {deleteFeedback,editFeedback} = useContext(FeedbackContext)

  return (
    <Card >
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes  onClick={()=> deleteFeedback(item.id)} color='purple' />
        </button>
      <button  className="edit" color='purple'>
        <FaEdit  onClick={()=> editFeedback(item)} />
      </button>
      <div className="text-dispplay">{item.text}</div>
      
    </Card>
  )
}

FeedbackItem.propTypes = {
  item : PropTypes.object.isRequired,
}

export default FeedbackItem
