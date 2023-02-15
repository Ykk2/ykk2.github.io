import './projectPreviews.css'
import gif1 from '../Gifs/Hard-gif-1.gif'
import gif2 from '../Gifs/Hard-gif-2.gif'
import gif3 from '../Gifs/Hard-gif-3.gif'



const Hard = () => {


    return (
        <div className="uTube-Preview">
            <div className="preview-contents">
                <div className="preview-contents-top">
                    <div className="preview-contents-info-container">
                        <h2>Landing Page</h2>
                        <div>View trending stories</div>
                        <div>View recommended stories</div>
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
                        <h2>Story Page</h2>
                        <div>Read a single story</div>
                        <div>Subscribe to the author</div>
                    </div>
                </div>
                <div className="preview-contents-bottom">
                    <div className="preview-contents-info-container">
                        <h2>Comments Modal</h2>
                        <div>View existing comments</div>
                        <div>Clap on a comment</div>
                    </div>
                    <div className="preview-contents-image-container">
                        <img src={gif3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hard
