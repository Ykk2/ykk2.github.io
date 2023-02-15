import './projectPreviews.css'
import gif1 from '../Gifs/BnB-gif-1.gif'
import gif2 from '../Gifs/BnB-gif-2.gif'
import gif3 from '../Gifs/BnB-gif-3.gif'


const BnB = () => {


    return (
        <div className="uTube-Preview">
            <div className="preview-contents">
                <div className="preview-contents-top">
                    <div className="preview-contents-info-container">
                        <h2>Landing Page</h2>
                        <div>View all available spots</div>
                        <div>or search for a specific spot</div>
                    </div>
                    <div className="preview-contents-image-container">
                        <img src={gif1} />
                    </div>
                </div>
                <div className="preview-contents-middle">
                    <div className="preview-contents-image-container">
                        <img src={gif2} />
                    </div>
                    <div className="preview-contents-info-container">
                        <h2>Spots Page</h2>
                        <div>View details for a single spot</div>
                        <div>Book a date for the spot</div>
                    </div>
                </div>
                <div className="preview-contents-bottom">
                    <div className="preview-contents-info-container">
                        <h2>Trips Page</h2>
                        <div>Review your current/past bookings</div>
                        <div>Cancel your reservation</div>
                    </div>
                    <div className="preview-contents-image-container">
                        <img src={gif3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BnB
