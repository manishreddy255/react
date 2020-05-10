import React, { Component } from 'react'
import DishDetail from './DishDetail';
import {Card, CardImg, CardTitle} from 'reactstrap'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish})
    }

    render() {
        const menu = this.props.dishes.map(
            dish => 
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card
                        onClick={() => this.onDishSelect(dish)
                        }>          
                        <CardImg width= "100%" src={dish.image} alt={dish.name} />
                        <CardTitle className="m-auto" >{dish.name}</CardTitle>
                        </Card>
                    </div>
            
        )

        return(
            <div className="container">
                <div className= "row">
                        {menu}
                </div>
                <DishDetail dish= {this.state.selectedDish} />
            </div>
        );
    }
}


export default Menu;

// {/* /* {this.renderDish(this.state.selectedDish)}' */}