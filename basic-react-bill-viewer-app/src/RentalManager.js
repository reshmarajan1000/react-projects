import React, { Component } from 'react'
import { Utility } from './Utility'
import { Construction } from './Construction'
import { NonConstruction } from './NonConstruction'

class RentalManager extends Component {

    static defaultProps = {
        utilities: [
            { "item": "Rent", "duration": "2 weeks", "amount": 500 }
        ]
    }

    state = {
        open: true,
        freeUsage: false,
        hiring: true,
        data: [],
        loading: true
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({ data, loading: false }))
    }
    
    componentDidUpdate(){
        console.log('Component updated')
    }

    toggleOpenClosed = () => {
        this.setState(prevState => (
            {
                close: !prevState.close
            }))

    }

    render() {
        //const utilities = this.props.utilities
        const { utilities } = this.props
        return (
            <div>
                <h3>{this.state.construction ? <Construction /> : <NonConstruction />}</h3>
                {utilities.map(
                    (utility, i) =>
                        <Utility
                            key={i}
                            item={utility.item}
                            duration={utility.duration}
                            amount={utility.amount}
                            freeUsage={this.state.freeUsage} />
                )}
                {this.state.loading
                    ? "loading:"
                    : <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id} >
                                    <h3>Most Popular Attire in this location</h3>
                                    <img src={product.image} height={100} alt={product.name} />
                                    <p>{product.name}</p>
                                </div>
                            )
                        })}
                    </div>
                }
                <label><button onClick={this.toggleOpenClosed}>Request Inspection </button>
                    {this.state.close ? " This house is open for inspection after 6 month.Deposit Taken!"
                        : " This house is closed for further inspection.Please check other properties !!"} </label>
            </div>
        )
    }
    
}

export default RentalManager