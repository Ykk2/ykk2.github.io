import { useState } from 'react'
import angelList from './Icons/angellist-svgrepo-com.svg'
import gitHub from './Icons/iconmonstr-github-1.svg'
import linkedIn from './Icons/iconmonstr-linkedin-3.svg'
import x from './Icons/close-circle.svg'

export const PageOne = () => {

    const [close, setClose] = useState(false)


    const handleCloseClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setClose(true)
    }

    const handleOpenClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (close) {
            setClose(false)
        }
        else {
            setClose(true)
        }
    }

    return (
        <div className="Page One">
            <div className="left">
                <div className="left-stuff" >
                    <div id="name" onClick={handleOpenClick}>
                        Richard
                    </div>
                    <div id="name" onClick={handleOpenClick}>
                        Kwon
                    </div>
                    <span id="contact-info">
                        <span>richardkwon5@gmail.com </span><a href="./RichardKwon-CV.pdf" target='_blank' rel='noreferrer'>| Download CV</a>
                    </span>
                </div>
            </div>
            <div className="right">
                <div className="right-stuff">
                    <a href="https://angel.co/u/richard-kwon-6" target="_blank" rel="noreferrer"><img className="angel-list" id="page-one-icons" src={angelList} alt=""/></a>
                    <a href="https://github.com/Ykk2" target="_blank" rel="noreferrer"><img className="git-hub" id="page-one-icons" src={gitHub} alt=""/></a>
                    <a href="https://www.linkedin.com/in/richardkwon2" target="_blank" rel="noreferrer"><img className="linked-in" id="page-one-icons" src={linkedIn} alt=""/></a>
                </div>
            </div>
            <div className={`${close ? "close-bio" : "bio"}`}>
                <img className="x" src={x} onClick={handleCloseClick}/>
                <span>Hello! Welcome to my portfolio site!</span>
                <span> Feel free to click and hover over anything!</span>
                <span>Who am I?</span>
                <span>I'm a full-stack developer with retail, restaurant, and commercial real estate experience.
                      I feel alive when I'm solving problems and appreciate the knowledge gained from the process.</span>
                <span>Currently I'm looking for a junior developer role where I can learn and contribute. </span>
                <span>If you wish to contact me, please do so at the bottom of this site!</span>
            </div>
        </div>
    )
}

export default PageOne
