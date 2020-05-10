import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComp';
import Footer from './FooterComp'

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishID) {
    this.setState({selectedDish: dishID})
}


  render() {
    return (
      <div className="App">
      <Header/>
    <Menu dishes = {this.state.dishes}
        onClick = {(dishID) => this.onDishSelect(dishID)}
    />
    <DishDetail dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]}/>
    <Footer/>
    </div>
    )
  }
}
export default Main;
