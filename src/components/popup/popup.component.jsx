import img from '../../illustration-thank-you.svg';
import './popup.style.scss'

const PopUp = ({clickedIndex}) => {
    return(
        <div className='containerBox'>
            <div className='container'>
            < img src={img} />
            <div className='rating-text'>{`You selected ${clickedIndex} out of 5`}</div>
            <h1>Thank you!</h1>
            <p className='text'>We appreciate you tking timne to give a rating. If you need more support, don't hesitate to get in touch!</p>
            </div>
        </div>
    )
}

export default  PopUp;