import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

var paragraphStyle = { backgroundColor: '#FFA07A', color: '#00008B' }
var headingStyle = { backgroundColor: '#00008B', color: '#FFFFFF' }
/*
let utilityList = [
    { "item": "Rent", "duration": "2 weeks", "Amount": 1000 },
    { "item": "Water", "duration": "4 weeks", "Amount": 1000 },
    { "item": "Electricity", "duration": "12 weeks", "Amount": 1000 }
]

const Utility = ({ item="No item", duration="No duration", Amount=0, freeUsage }) => {
    return (
        <section>
            <div>
                <h2 style={headingStyle}> {item}</h2>
                <p>Billing Cycle: {duration}</p>
                <p>Amount: ${Amount} </p>
                <p>Free Usage Allowed: {freeUsage ? "Yes" : "No"} </p>
            </div>
        </section>
    )
}
const Construction = () =>
    <p>This house is under construction!!</p>

const NotConstruction = () =>
    <p> Utility Cost Breakup - 23A, Richmond Road,Victoria</p>

class RentalManager extends Component {
    static defaultProps = {
        utilities: [
            { "item": "Rent", "duration": "2 weeks", "Amount": 500 }
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
                <h3>{this.state.construction ? <Construction /> : <NotConstruction />}</h3>
                {utilities.map(
                    (utility, i) =>
                        <Utility
                            key={i}
                            item={utility.item}
                            duration={utility.duration}
                            Amount={utility.Amount}
                            freeUsage={this.state.freeUsage} />
                )}
                {this.state.loading
                    ? "loading:"
                    : <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id} >
                                    <h3>Free Gift</h3>
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


render(
    <RentalManager utilities={utilityList} />,
    document.getElementById('root')
)
*/
/*******Code Snippet for Form*******/
/*
class ColorForm extends Component {
    state = { value: '' }
    newColor = e =>
        this.setState({ value: e.target.value } )
    submit = e => {
        console.log(`Hello ${this.state.value}!`)
        e.preventDefault()
    }
        
    render() {
        return (
            <form onSubmit={this.submit} >
                <label> select color: 
                <input type="color" onChange={this.newColor} />
                </label>
                <button>submit</button>
            </form>
        )
    }
}

render(
    <ColorForm />,
    document.getElementById('root')
)
*/

/*******Code Snippet for Child components with array*******/
/*let utilityList = [
    { "item": "My Inspiration", "duration": "Hemolington Hershey", "Amount": 1000 },
    { "item": "Lost Dreams", "duration": "pappai Korche", "Amount": 1000 },
    { "item": "Fire Wings", "duration": "Emilia vilnocji", "Amount": 1000 }
]

const Utility = ({item, duration, Amount}) => {
    return (
        <section>
            <h2 style={headingStyle}> {item}</h2>
            <p style={paragraphStyle}>By:{duration}</p>
            <p>Amount:{Amount} Amount</p>
        </section>
    )
}
const Library = ({ utilities }) => {
    return (
        <div>
            {utilities.map(
                (book,i) =>
                    <Utility
                        key={i}
                        item={book.item}
                        duration={book.duration}
                        Amount={book.Amount}
                    />
            )}
        </div>
    )
}

render(
    <Library utilities={utilityList}/>,
    document.getElementById('root')
)
*/

/*******Code Snippet for Cild components*******/
/*
const Utility = ({ item, duration, Amount }) => {
    return (
        <section>
            <h2 style={headingStyle}> {item}</h2>
            <p>Duration:{duration}</p>
            <p>Amount:{Amount} Amount</p>
        </section>
    )
}
const Library = () => {
    return (
        <div>
            <Utility item="Mobile" duration="2 weeks" Amount={1000} />
            <Utility item="Gas" duration="12 weeks" Amount={1100} />
            <Utility item="Water" duration="4 weeks" Amount={1200} />
        </div>
    )
}

render(
    <Library />,
    document.getElementById('root')
)
*/

/*******Code Snippet for Function Component*******/
/*
let TaskEstimate = {
    hourlyRate: 600,
    totalDays: 100,
    dailyHrs: 7
}
//custom method
const getDailyRate = cost => {
    return " $" + cost
}
//custom method
const getTotalCost = (hourlyRate, dailyHrs, totalDays) => {

    return getDailyRate(hourlyRate * dailyHrs * totalDays)
}

//Function component Example
const TaskEstimateCounter = ({ hourlyRate, dailyHrs, totalDays }) => {
    return (
        <section>
            <p> Hourly Rate         : {hourlyRate} </p >
            <p> Daily Hours         : {dailyHrs}   </p>
            <p> Total Days          : {totalDays}  </p>
            <p> Total Amount Due    : {getTotalCost(hourlyRate, dailyHrs, totalDays)}</p>

        </section>
    )
}

render
    (<TaskEstimateCounter
        totalDays={TaskEstimate.totalDays}
        dailyHrs={TaskEstimate.dailyHrs}
        hourlyRate={TaskEstimate.hourlyRate} />,
    document.getElementById('root')
    )
*/
/*******Code Snippet for Class Component*******/
/*let TaskEstimate = {
    hourlyRate: 600,
    totalDays: 100,
    dailyHrs: 7
}
class TaskEstimateCounter extends Component{
    //custom method
    getDailyRate = cost => {
        return " $" + cost
    }
    //custom method
    getTotalCost = (hourlyRate, dailyHrs, totalDays ) => {

        return this.getDailyRate(hourlyRate * dailyHrs * totalDays)
    }
    render() {
        const { hourlyRate, dailyHrs, totalDays } = this.props //this enables to use variable without this.props
		return(
            <section>
                <p> Hourly Rate         : {hourlyRate} </p >
                <p> Daily Hours         : {dailyHrs}   </p>
                <p> Total Days          : {totalDays}  </p>                           
                <p> Total Amount Due    : {this.getTotalCost(hourlyRate, dailyHrs, totalDays)}</p>
			</section>
		)
	}
}
//rendering by passing dynamic variable values
//rendering the TaskEsrimateCounter Class and attaching to root
render(<TaskEstimateCounter
    totalDays={TaskEstimate.totalDays}
    dailyHrs={TaskEstimate.dailyHrs}
    hourlyRate={TaskEstimate.hourlyRate} />, document.getElementById('root'))

*/
/*******Code Snippet for Passing props*******/
/*
 //Defining styles
 var style= {
	 backgroundColor:'orange',
	 color:'white',
	 fontFamily:'Arial'
 }
class Message extends React.Component{
	render(){
		return(
			<div>
				<h1 id='heading-element' style={{color:this.props.color}}> {this.props.message}</h1>
				<p> Glad that you are here! I will be back in {this.props.minutes} minutes </p>
			</div>
		)
	}
}

ReactDOM.render(<Message minutes={10} color="blue" message="You are going good!"/>,document.getElementById('root'))
*/