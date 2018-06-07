import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import registerServiceWorker from './registerServiceWorker';

class TodoApp extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			items: props.items
		};
	}

  //Add more tasks
	addMore  = () => {
		let items = this.state.items;
		let size = 'Task number ' + (items.length + 1);
		items.push(size);

		this.setState({items});
	}
  //Remove last task
  removeTask = () => {
    let items = this.state.items;
    items.pop();

    this.setState({items});
  }
  //Clear all
  clearAll = () => {
    let items = this.state.items;
    items.length = 0;

    this.setState({items});
  }

	render = () => {
		let items = this.state.items;
		return (
			<div className="buttons">
				<Button bsStyle="success" bsSize="large" onClick={() => this.addMore()}>Add</Button>
        <Button bsStyle="warning" bsSize="large" onClick={() => this.removeTask()}>Remove</Button>
        <Button bsStyle="danger" bsSize="large" onClick={() => this.clearAll()}>Clear</Button>
				<ListGroup>
					{items.map(i => <ListGroupItem key={i}>{i}</ListGroupItem> )}
				</ListGroup>
			</div>
		);
	}
}

let items =[];

ReactDOM.render(
	<TodoApp items={items} />,
	document.getElementById("root"),
);

registerServiceWorker();
