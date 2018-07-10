import React from 'react';
import Header from './components/Header.jsx';
import LeaveReview from './components/LeaveReview.jsx';
import Review from './components/Review.jsx';
import WriteReview from './components/WriteReview.jsx';
import axios from 'axios';

export default class ReviewComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            RestaurantID: 1,
            RestaurantName: '',
            reviews: [],
            update: true,
            writeReview: false,
            toggledRating: 0
        }
    }

    componentDidMount() {
        let reviews = [];
        let restaurantName = ''
        let restaurantID = 0
        axios.get('/api/restaurants')
            .then(({data}) => {
                console.log('api restaurant data', data)
                let n = this.state.RestaurantID - 1;
                console.log(data[n]);
                this.setState({
                    RestaurantName: data[n].name,
                    RestaurantID: data[n].id,
                })
                this.loadReviews();
            });
    }

    loadReviews() {
        axios.get('api/reviews', {
            headers: {'restaurant_id': this.state.RestaurantID}
        }) 
        .then(({data}) => {
            console.log('reviews data received', data)
            let reviews = [];
            data.forEach(review => {
                let counts = review.counts.split(',');
                let newReview = {
                    username: null,
                    location: null,
                    date: review.date,
                    friends_count: null,
                    reviews_count: null,
                    photos_count: null,
                    useful_count: Number(counts[0]),
                    funny_count: Number(counts[1]),
                    cool_count: Number(counts[2]),
                    reviewDescription: review.description,
                    img_src: null,
                    rating: review.rating,
                    photos: null
                }
                axios.get('api/users', {
                    headers: {'user_id': review.users_id}
                })
                .then(({data}) => {
                    console.log('users data received', data)
                    let user_counts = data[0].counts.split(',');
                    newReview.username = data[0].name
                    newReview.location = data[0].location
                    newReview.friends_count = user_counts[0]
                    newReview.reviews_count = user_counts[1]
                    newReview.photos_count = user_counts[2]
                    newReview.img_src = data[0].profilephoto
                    axios.get('api/photos', {
                        headers: {'review_id': review.id}
                    })
                    .then(({data}) => {
                        console.log('photo data received', data)
                        let new_album = [];
                        data.forEach(photo => {
                            new_album.push(photo.src)
                        })
                        newReview.photos = new_album

                        reviews.push(newReview);
                        this.setState({
                            reviews: reviews,
                            update: true
                        })
                    })
                })
            })
        })
    this.setState({
        update: false
    })
    }

    writeReviewToggleOff() {
        if (this.state.writeReview) {
            this.setState({
                writeReview: false,
                toggledRating: 0
            })
        }
    }

    writeReviewToggleOn(n) {
        if (!this.state.writeReview) {
            this.setState({
                writeReview: true,
                toggledRating: n
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.update?
                < Header RestaurantName={this.state.RestaurantName}/> : null }
                {this.state.update?
                < LeaveReview RestaurantName={this.state.RestaurantName} writeReviewToggleOn={this.writeReviewToggleOn.bind(this)}/> : null }
                { this.state.reviews.map(review => (
                < Review rating={review.rating} photos={review.photos} username={review.username} location={review.location} date={review.date} friends_count={review.friends_count} reviews_count={review.reviews_count} photos_count={review.photos_count} useful_count={review.useful_count} funny_count={review.funny_count} cool_count={review.cool_count} reviewDescription={review.reviewDescription} imgSrc={review.img_src} key={Math.random()*Math.random(1)}/>
                ))
                }
                { this.state.writeReview? < WriteReview  toggledRating={this.state.toggledRating} writeReviewToggleOff={this.writeReviewToggleOff.bind(this)} RestaurantID={this.state.RestaurantID} RestaurantName={this.state.RestaurantName}/> : null }
            </div>
        )
    }
}