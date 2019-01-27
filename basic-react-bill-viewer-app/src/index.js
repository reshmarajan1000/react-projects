import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import RentalManager from './RentalManager'

let utilityList = [
    { "item": "Rent", "duration": "2 weeks", "amount": 1000 },
    { "item": "Water", "duration": "4 weeks", "amount": 1000 },
    { "item": "Electricity", "duration": "12 weeks", "amount": 1000 }
]

render(
    <RentalManager utilities={utilityList} />,
    document.getElementById('root')
)

