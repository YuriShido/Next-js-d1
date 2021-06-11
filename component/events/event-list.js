import classes from './event-list.module.css'
import EventItem from './event-item'
const EventList = (props) => {
    const { items } = props
    console.log("🚀 ~ file: event-list.js ~ line 6 ~ EventList ~ items", items)
    return (
        <ul className={classes.list}>
            {
                items.map((event) => (
                    <EventItem 
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    image={event.image}
                    />
                ))
            }
        </ul>
    )
}

export default EventList