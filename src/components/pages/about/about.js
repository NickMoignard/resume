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
                        <h4 className="mb-0 mt-5">You will be interested</h4>
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

                        <p className="mb-4">I'm a software developer with more than 9 years of experience. I can write both front-end and
                            back-end
                            applications, browser extensions, desktop and mobile apps. In my career, I was working with
                            many different
                            technologies:</p>
                        <div className="row">
                            <div className="col-lg-10 item-list">
                                <ul>
                                    <li>
                                        <p>JavaScript</p>
                                        <p>React</p>
                                    </li>
                                    <li>
                                        <p>Ruby on Rails</p>
                                    </li>
                                    <li>
                                        <p>Python</p>
                                    </li>
                                    <li>
                                        <p>I have a lot of experience in web development.
                                            Complex animations, D&D, data visualizations with SVG or Canvas are not a problem at
                                            all;</p>
                                    </li>
                                    <li>
                                        <p>I have a strong knowledge of relational databases. My favourite database option is PostgreSQL </p>
                                    </li>
                                    <li>
                                        <p>Team leader etc etc </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
