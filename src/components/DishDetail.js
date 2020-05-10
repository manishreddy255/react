import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'

class DishDetail extends Component {
    constructor(props) {
        super(props)
            this.state = {

            }

    }


    render() {
            function renderDish(dish) {
                if(dish!= null) {
                    return (
                        <Card>
                            <CardImg width='100%' src={dish.image} alt= {dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    )
                }
            }

            function commentsDish(dish) {
                if(dish!=null) {
                    return (
                        <div>
                            <h4>Comments</h4>
                            <ul className="list-unstyled"> 
                            {dish.comments.map(e => 
                                <li>{e}</li>
                            )}
                            </ul>
                        </div>
                    )
                } else{
                    return(
                        <div></div>
                    )
                }
            }

        return(
            <div className="row">
                <div className='col-12 col-md-5 m-1'>
                    {renderDish(this.props.dish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                  <div>
                  {commentsDish(this.props.dish)}
                  </div>   
                </div>
            </div>
        )
    }
}

export default DishDetail;