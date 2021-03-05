import React from 'react';
import TableView from './TableView';

class TableContainer extends React.PureComponent{    
    constructor(props){
        super(props)
        
        this.state = {
            index: null
        }

        this.showDetails = e => {
            let number = e.target.parentNode.getAttribute("flight");
            fetch(`https://api.spacexdata.com/v3/launches/${number}`)
                .then(response => response.json())
                .then(data => {
                    props.showLaunch(data);
                });

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
         ></TableView>   
        );
    }
}

export default TableContainer;