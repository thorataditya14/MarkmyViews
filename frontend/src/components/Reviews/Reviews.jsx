import './Reviews.css';
import { useState, useEffect } from "react";
import { publicRequest } from "../../requestMethods";






function Review({ review }) {
    const userFullname = review.userid.firstname + " " + review.userid.lastname
    const userReview = review.review

    const date = new Date(review.createdAt);
    const userReviewTime = date.toDateString() + " " + date.toTimeString().slice(0, 8)

    let userRatings = ""
    for (let i = 0; i < review.rating; i++)
        userRatings += "★ "

    for (let i = review.rating; i < 5; i++)
        userRatings += "☆ "


    return (
        <div className="review">
            <div className="review-top">
                <div className="review-user">
                    {userFullname}
                </div>
                <div className="review-rating">
                    {userRatings}
                </div>
                <div className="review-time">
                    {userReviewTime}
                </div>
            </div>
            <div className="review-bottom">
                {userReview}
            </div>
        </div>
    )
}


export default function Reviews({ bookid }) {
    const [bookReviews, setBookReviews] = useState([]);

    useEffect(() => {
        const getBookReviews = async () => {
            try {
                let res = await publicRequest.get(`/reviews/get-reviews?bookid=${bookid}`)
                setBookReviews(res.data);
            } catch (err) { }
        };

        getBookReviews()
    }, [bookid]);

    return (
        <div className="reviews">
            {bookReviews.map((review, index) => (
                <Review review={review} key={index} />
            ))}
        </div>
    )
}