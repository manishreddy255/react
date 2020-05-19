import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent'
import About from './AboutComponent';
import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions'
import { LEADERS } from '../shared/leaders'
import Header from './HeaderComp';
import Footer from './FooterComp';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions : state.promotions,
    leaders : state.leaders
  }
}

class Main extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    console.log(this.props)
    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }

    const DishWithId = ({match}) => {
      return(
        <div>
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.id,10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.id,10))}
         />
        </div>
          );
    };

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />} />
          <Route path="/menu/:id" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Main));

      