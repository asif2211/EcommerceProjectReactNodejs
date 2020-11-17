import React, { Component } from 'react'
import {RatingNumber,Span,Review} from './style'

export default class Rating extends Component {
    render() {
        const {rating, review} = this.props;
        return (
            <div>
            <RatingNumber className="rating">  
              <Span>
              <i className={rating >=1 ? 'fa fa-star' : rating >=0.5? 'fa fa-star-half-o' :'fa fa-star-o' }></i>
              
            </Span>
            <Span>
            <i className={rating >=2 ? 'fa fa-star' : rating >=1.5? 'fa fa-star-half-o' :'fa fa-star-o' }></i>
            </Span>
            <Span>
            <i className={rating >=3 ? 'fa fa-star' : rating >=2.5? 'fa fa-star-half-o' :'fa fa-star-o' }></i>
            </Span>
            <Span>
            <i className={rating >=4 ? 'fa fa-star' : rating >=3.5? 'fa fa-star-half-o' :'fa fa-star-o' }></i>
            </Span>
            <Span>
            <i className={Rating >=5 ? 'fa fa-star' : Rating >=4.5? 'fa fa-star-half-o' :'fa fa-star-o' }></i>
            </Span>
            <Review>{review +"  " + "review"}</Review>
            </RatingNumber>
        
            </div>
        )
    }
}
