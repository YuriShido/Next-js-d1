import { useRouter} from 'next/router'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../component/events/event-list'

const AllEventsPage =() => {
    const router = useRouter()
    const events = getAllEvents()

    return(
        <>
        <EventList items={events}/>
        </>
    )
}

export default AllEventsPage