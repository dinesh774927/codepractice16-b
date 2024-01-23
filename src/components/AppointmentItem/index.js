// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {star, item} = props
  const starred = () => {
    star(item.id)
  }
  return (
    <li>
      <div className="items-container">
        <div>
          <p className="name">{item.title}</p>
          <p className="date">Date:{item.date}</p>
        </div>
        <button
          data-testid="star"
          onClick={starred}
          className="button-star"
          type="button"
        >
          <img
            alt="star"
            src={
              item.isStarred
                ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
            }
          />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
