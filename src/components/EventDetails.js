import React from "react"
import {useParams} from "react-router-dom"
import eventData from "./eventData"

function EventDetails() {
    const {eventId} = useParams();
    const thisProduct = eventData.find(event => event.id === eventId)
    return (
        <div>
            <h1>{thisProduct.category}</h1>
        </div>
    )
}

export default EventDetails;