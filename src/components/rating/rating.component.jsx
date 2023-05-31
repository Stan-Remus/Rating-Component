import { Link } from 'react-router-dom';
import star from '../../icon-star.svg';
import './rating.style.scss';
import { useState } from 'react';







const RatingCom = ({ setClickedIndex }) => {

 const [ value, setValue ] = useState(6)

  const handleClick = (index) => {
    setClickedIndex(index);
    setValue(index)
    
  };

  return (
    <div className="containerRatingBox">
      <div className="containerRating">
        <div className="leftStar">
          <img src={star} alt="" />
        </div>
        <div className="ratingTitle">How did we do?</div>
        <div className="text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </div>
        <div className="ratingScore">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`circle ${value === index ? 'clicked' : ''}`}
              onClick={() => handleClick(index)}
            >
              {index}
            </div>
          ))}
        </div>
        <Link to="/rating" className="submitButton">
          SUBMIT
        </Link>
      </div>
    </div>
  );
}

export default RatingCom;