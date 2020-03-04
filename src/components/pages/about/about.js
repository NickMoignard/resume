import React, {useContext, useEffect} from 'react'
import PersonContext from "../../../context/person/person-context"

const About = () => {
    const personContext = useContext(PersonContext)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { personContext.getPerson()}, [])
    const {person: {name, birthDate, country, city, languages, achievements}} = personContext

    return (
        <React.Fragment>
            <div className="container nav-height-padding">

                <div className="row big-text mb-5 mb-lg-6">
                    <div className="col-lg-10">
                        <h4 className="mb-0 mt-5">Should you be interested in working with me</h4>
                        <h1 className="mt-0 mb-0 text-uppercase">{name}</h1>

                        <div className="row mb-5 h4">
                            <div className="col-lg-6 col-md-7 pt-5">
                                <div className="row mb-2">
                                    <div className="col-5 col-md-4">Birth date:</div>
                                    <div className="col font-weight-light">{birthDate}</div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-5 col-md-4">Country:</div>
                                    <div className="col font-weight-light">{country}</div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-5 col-md-4">City:</div>
                                    <div className="col font-weight-light">{city}</div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-5 col-md-4">Languages:</div>
                                    <div className="col font-weight-light">{languages}</div>
                                </div>
                            </div>
                            <div className="col-lg-6 mr-auto pt-5 item-list">
                                <h3>Achievements and rewards:</h3>
                                <ul className="font-weight-light h4">
                                    {achievements && achievements.map((a, key) => <li key={key} className="mb-2">{a.title}</li>)}
                                </ul>
                            </div>
                        </div>

                        <p className="mb-4">I am a self-taught React on Rails developer based in Melbourne. I have proven experience with both front and back end development, and a strong understanding of SQL databases, Agile Scrums, machine learning, SEO analysis, web scraping bots, Docker and Dev Ops.</p>
                    
        
                    </div>
                </div>
            </div>

            <div className="bg-warning">
                <div className="container">
                    <div className="py-5 py-lg-6">
                        <h2>Where can you meet me</h2>
                        <div className="row">
                            <div className="col-lg mb-4">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src="/assets/img/conf2.jpeg" alt="" className="img-fluid image-gray mb-3"/>
                                    </div>
                                    <div className="col-md-7">
                                        <h4>Ruby on Rails Melbourne Meetup</h4>
                                        <p>I attend the monthly RoR meetup in melbourne. Come watch lectures from colleagues around melbourne, Free food and drinks with plenty of time for discussion after the presentations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg mb-4">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src="/assets/img/conf1.jpeg" alt="" className="img-fluid image-gray mb-3"/>
                                    </div>
                                    <div className="col-md-7">
                                        <h4>Python Meetup Melbourne</h4>
                                        <p>Monthly Python meetup for Melbourne developers</p>
                                        <p>Lectures, free food and discussion with colleagues! I attend monthly, feel free to chat with me after the talks :)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default About
