import React from 'react';
import TableView from './TableView';

class TableContainer extends React.PureComponent{    
    constructor(props){
        super(props)
        
        this.state = {
            index: null
        }

        this.showDetails = async e => {
            let number = e.target.parentNode.getAttribute("flight");
            const responce = await fetch(`https://api.spacexdata.com/v3/launches/${number}`);
            const data = await responce.json();
            props.showLaunch(data);
        }
    }
    
    render() {
        return(
         <TableView
            showDetails={this.showDetails}
            key={this.key}
            index={this.index}
            flight_number={this.flight}
            launches={this.props.launches}
            className={this.props.className}
            title={this.props.title}
         ></TableView>   
        );
    }
}

export default TableContainer;