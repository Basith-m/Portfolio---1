import React, { useState } from 'react'
import './services.css'

const Services = () => {

    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="services section" id="services">
            <h2 className="section_title">
                Services
            </h2>
            <span className="section_subtitle">
                What i offer
            </span>

            <div className="services_container container grid">

                <div className="services_content">
                    <div>
                        <i className='uil uil-web-grid services_icon'></i>
                        <h3 className='services_title'>Planning and  <br /> Analysis</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services_modal-title">Web Developer</h3>
                            <p className='servies_modal-description'>
                                In this initial stage, I work closely with clients to understand their goals, requirements, and target audience. Through detailed planning and analysis, we lay the groundwork for a successful project.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Requirement Gathering
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Market Analysis
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Project Planning
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Technology Selection
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Prototyping
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className='uil uil-arrow services_icon'></i>
                        <h3 className='services_title'>Design and  <br /> Development</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services_modal-title">Design and Development</h3>
                            <p className='servies_modal-description'>
                                In this stage, the project begins to take shape through the design and development of the web application. The focus is on creating a visually appealing and functionally robust solution that aligns with the client's brand and goals.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        UI/UX Design
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Frontend Development
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Backend Development
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Database Design
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Integration
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className='uil uil-edit services_icon'></i>
                        <h3 className='services_title'>Testing and  <br /> Deployment</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services_modal-title">Deployment</h3>
                            <p className='servies_modal-description'>
                                This stage focuses on ensuring the quality and stability of the web application through rigorous testing and deployment processes. It involves identifying and addressing any issues or bugs to deliver a polished and reliable product to the client.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Quality Assurance
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Performance Optimization
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Security Auditing
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Deployment and Hosting
                                    </p>
                                </li>
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Post-launch Support
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Services