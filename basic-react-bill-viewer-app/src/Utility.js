import React, { Component } from 'react'

var paragraphStyle = { backgroundColor: '#FFFFFF', color: '#00008B' }
var headingStyle = { backgroundColor: '#00008B', color: '#FFFFFF' }

export const Utility = ({ item="No item", duration="No duration", amount=0, freeUsage }) => {

    return (
        <section>
            <div>
                <h2 style={headingStyle}> {item}</h2>
                <p style={paragraphStyle}>Billing Cycle: {duration}</p>
                <p style={paragraphStyle}>Amount: ${amount} </p>
                <p style={paragraphStyle}>Free Usage Allowed: {freeUsage ? "Yes" : "No"} </p>
            </div>
        </section>
    )
    
}