import React from 'react';
import BusinessPresenter from '../../BusinessPresenter/BusinessPresenter'

const PlacesMapper = ({places}) => {
    return (
        <div>
            {places.map((place, index) => {
                return (
                    <BusinessPresenter key={index} place={place} title={place.title} type={place.type} address={place.address} thumbnail={place.thumbnail} hours={place.hours} />
                )
            })}
        </div>
    )
}

export default PlacesMapper