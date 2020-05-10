import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'


function RenderDish({dish}) {
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

const CommentsDish = ({dish}) => {
        if(dish!=null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled"> 
                    {dish.comments.map(e => 
                        <li key={e}>{e}</li>
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

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="row">
        <div className='col-12 col-md-5 m-1'>
        <RenderDish dish= {props.dish}/>
        </div>
        <div className='col-12 col-md-5 m-1'>
          <div>
          <CommentsDish dish= {props.dish}/>
          </div>   
        </div>
    </div>
        )
    }else {
     return (
        <div></div> 
    )
    }
    
}


export default DishDetail;