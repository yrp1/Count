import React from 'react'
import randomcolor from "randomcolor"
import Component from './Component'

class App extends React.Component{

	constructor(){
		console.log("constructor")
		super()
		this.state = {
			count : 0,
			color : ""
		}
	}

	event = () => {
		this.setState(prevState => {
			return{
				count: prevState.count + 1
			}
			
		})
	}

	decEvent = () => {
		this.setState(prevState => {
			return{
				count: prevState.count - 1
			}
			
		})
	}

	componentDidMount() {
		console.log("Component did mount")
		console.log("--------------------------")
	}

	componentDidUpdate(prevProps,prevState){
		if(prevState.count!== this.state.count){
			const newColor = randomcolor()
            this.setState({color: newColor})
		}
	}

	render(){
		console.log("render")
		return(
				<div className = "count">
				<Component count ={this.state.count} color = {this.state.color} incre = {this.event} 
				dec={this.decEvent}/>
				</div>
			)
	}

	
}

export default App