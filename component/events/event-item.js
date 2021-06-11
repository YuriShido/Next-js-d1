import classes from './event-item.module.css'

const EventItem = (props) => {
    const {title, image, date, location, id } = props
    console.log(props);
    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <time>{date}</time>

                    </div>
                    <div className={classes.adress}>
                        {location}
                    </div>
                </div>
                <div className={classes.actions}>
                    <button>
                        <span>Explotr Event</span>
                        <span className={classes.icon}>
                            &#x27A1;
                        </span>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default EventItem