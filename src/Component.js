import React from 'react'

const Component = (props) =>{
	return(
				<div className = "count">
					<h1 style={{color: props.color}}>{props.count}</h1>
					<button onClick = {props.incre} >Increment!!</button>
					<button onClick = {props.dec} >Decrement!!</button>
					<p>When you click on button there will be Increment & Decrement in number by 1</p>
					<p>Here the number will keep on updating with different colors because of lifecycle method</p>
					<p>:) Thank You!!! :)</p>
				</div>
		)
}

export default Component