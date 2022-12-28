import React from 'react';
import axios from 'axios'
import useAuth from '../../hooks/useAuth';

const EventsPresenter = ({event, title, when, address, description, image, link}) => {

    const [user, token] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newFaveEvent = {
           title: title,
           when: when,
           address: address,
           description: description,
           image: image,
           link: link,
           user_id: 1,
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/upcoming_events/', 
            newFaveEvent, 
            {
                headers: {Authorization: "Bearer " + token},
            }
        );
        if (response.status === 201) {
            alert("Successfully saved event!")
        }
        console.log(newFaveEvent)
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{event.title}</h1>
                <p>{event.date.when}</p>
                <p>{event.address[0]}</p>
                <p>{event.description}</p>
                <p>{event.link}</p>
                <img src={event.image} alt=''/>
                <button type='submit'>Save me to your faves!</button>
            </form>
        </div>
    )
}

export default EventsPresenter