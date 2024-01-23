import {Component} from 'react'
import './index.css'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

const appointment = [
  {
    id: uuidv4(),
    title: 'dinesh',
    date: '23 January 2024, Tuesday',
    isStarred: false,
  },
]
class Appointments extends Component {
  state = {list: appointment, title: '', date: '', starred: false}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onStarred = id => {
    this.setState(prev => ({
      list: prev.list.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return {...each}
      }),
    }))
  }

  onAdd = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
    const newitem = {id: uuidv4(), title, date: newDate, isStarred: false}

    this.setState(prev => ({
      list: [...prev.list, newitem],
      title: '',
      date: '',
    }))
  }

  onFilter = () => {
    this.setState(prev => ({starred: !prev.starred}))
  }

  render() {
    const {list, date, title, starred} = this.state
    const newList = starred
      ? list.filter(each => each.isStarred === true)
      : list
    console.log(list)
    return (
      <div className="container">
        <div className="box">
          <h1 className="heading">Add Appointment</h1>
          <div className="form-container">
            <form className="form">
              <div className="input-contianer">
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <input
                  value={title}
                  onChange={this.onChangeTitle}
                  className="input"
                  id="title"
                  placeholder="Title"
                  type="text"
                />
              </div>
              <div className="input-contianer">
                <label className="label" htmlFor="date">
                  DATE
                </label>
                <input
                  value={date}
                  onChange={this.onChangeDate}
                  className="input"
                  id="date"
                  placeholder="dd/mm/yyyy"
                  type="date"
                />
              </div>
              <button onClick={this.onAdd} className="button" type="submit">
                Add
              </button>
            </form>
            <img
              className="img"
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
          <div>
            <hr className="hr" />
          </div>

          <div>
            <div className="starred-container">
              <h1 className="appointment">Appointments</h1>
              <button
                onClick={this.onFilter}
                className={starred ? 'starred1' : 'starred'}
                type="button"
              >
                Starred
              </button>
            </div>
            <ul className="unorder">
              {newList.map(each => (
                <AppointmentItem
                  star={this.onStarred}
                  item={each}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
