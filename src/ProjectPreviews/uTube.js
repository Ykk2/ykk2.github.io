import './projectPreviews.css'
import gif1 from '../Gifs/uTube-gif-1.gif'
import gif2 from '../Gifs/uTube-gif-2.gif'
import gif3 from '../Gifs/uTube-gif-3.gif'


const UTube = () => {


    return (
        <div className="uTube-Preview">
            <div className="preview-contents">
                <div className="preview-contents-top">
                    <div className="preview-contents-info-container">
                        <h2>Landing Page</h2>
                        <div>View all available videos</div>
                        <div>Hover over a video to preview</div>
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
                        <h2>Video Page</h2>
                        <div>View details for a single video</div>
                        <div>Comment, susbcribe, or like a video</div>
                    </div>
                </div>
                <div className="preview-contents-bottom">
                    <div className="preview-contents-info-container">
                        <h2>Profile Page</h2>
                        <div>Edit your videos</div>
                        <div>Delete your videos</div>
                    </div>
                    <div className="preview-contents-image-container">
                        <img src={gif3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UTube
