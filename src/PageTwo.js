import bbq from './Icons/bbq.png'
import book from './Icons/book.png'
import beer from './Icons/beer.png'
import chicken from './Icons/chicken.png'
import cocktail from './Icons/cocktail.png'
import espresso from './Icons/espresso.png'
import espressoBaseEdit from './Icons/espresso-base-edit.png'
import espressoSecondEdit from './Icons/espresso-second-edit.png'
import fullyColoredChicken from './Icons/fully-colored-chicken.png'
import hotel from './Icons/hotel.png'
import pig from './Icons/pig.png'
import pigNoBorder from './Icons/pig-no-border.png'
import shop from './Icons/shop.png'
import skyline from './Icons/skyline.png'
import skylineBaseEdit from './Icons/skyline-base-edit.png'
import skylineSecondEdit from './Icons/skyline-second-edit.png'

export const PageTwo = () => {

    return (
        <div className="Page Two">
            <div className="left">
                <div className="left-stuff">
                    <div id="left-title">
                        Background
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="right-stuff">
                    <div className="right-stuff-items-container">
                        <div className="right-stuff-items-a">
                            <span id="title">Tous Les Jours</span> <span id="years">2014 - 2015</span>
                            <div>Bakery</div>
                            <div>Barista</div>
                        </div>
                        <img className="cocktail" src={espresso} />
                    </div>
                    <div className="right-stuff-items-container">
                        <div className="right-stuff-items-a">
                            <span id="title">ChiMek</span> <span id="years">2015 - 2017</span>
                            <div>Restaurant</div>
                            <div>Server</div>
                        </div>
                        <img className="cocktail" src={fullyColoredChicken} />
                    </div>
                    <div className="right-stuff-items-container">
                        <div className="right-stuff-items-a">
                            <span id="title">DaeBak</span> <span id="years">2015 - 2016</span>
                            <div>Restaurant</div>
                            <div>Server</div>
                        </div>
                        <img className="cocktail" src={beer} />
                    </div>
                    <div className="right-stuff-items-container">
                        <div className="right-stuff-items-a">
                            <span id="title">Doni Don</span> <span id="years">2016 - 2017</span>
                            <div>Restaurant</div>
                            <div>Server</div>
                        </div>
                        <img className="cocktail" src={pigNoBorder} />
                    </div>
                    <div className="right-stuff-items-container">
                        <div className="right-stuff-items-a">
                            <span id="title">Din Tai Fung</span> <span id="years">2017 - 2018</span>
                            <div>Restaurant</div>
                            <div>Bartender</div>
                        </div>
                        <img className="cocktail" src={cocktail} />
                    </div>
                    <div className="right-stuff-items-container">
                        <div className="right-stuff-items-a">
                            <span id="title">Slatt Capital</span> <span id="years">2018 - 2020</span>
                            <div>Mortgage Banking</div>
                            <div>Loan Servicing Analyst</div>
                        </div>
                        <img className="cocktail" src={shop} />
                    </div>
                    <div className="right-stuff-items-container">
                        <div className="right-stuff-items-a">
                            <span id="title">First Republic Bank</span> <span id="years">2020 - 2022</span>
                            <div>Mortgage Banking</div>
                            <div>Loan Closing Specialist</div>
                        </div>
                        <img className="cocktail" src={skyline} />
                    </div>
                    <div className="right-stuff-items-container">
                        <div className="right-stuff-items-a">
                            <span id="title">App Academy</span> <span id="years">2022 - 2023</span>
                            <div>Education</div>
                            <div>Software Engineering Student</div>
                        </div>
                        <img className="cocktail" src={book} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PageTwo
