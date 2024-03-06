import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="qualification section">
            <h2 className="section_title">
                Qualification
            </h2>
            <span className="section_subtitle">
                My personal journey
            </span>

            <div className="qualification_container container">
                <div className="qualification_tabs">

                    <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification-icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification-icon"></i>
                        Experience
                    </div>

                </div>
                <div className="qualification_sections">


                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>

                        <div className="qualificaton_data">
                            <div>
                                <h3 className="qualification_title">BCA</h3>
                                <span className="qualification_subtitle">Calicut University</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                            </div>
                        </div>

                        <div className="qualificaton_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Programming Basics</h3>
                                <span className="qualification_subtitle">Brototype</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023
                                </div>
                            </div>
                        </div>

                        <div className="qualificaton_data">
                            <div>
                                <h3 className="qualification_title">Plus Two</h3>
                                <span className="qualification_subtitle">GVHSS - Chettiyamkinar</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualificaton_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                            </div>
                            <div>
                                <h3 className="qualification_title">10 th</h3>
                                <span className="qualification_subtitle">PKMMHSS - Edarikkode</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>

                        <div className="qualificaton_data">
                            <div>
                                <h3 className="qualification_title">MERN Stack intern</h3>
                                <span className="qualification_subtitle">Luminar Technolab -Kochi</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                            </div>
                        </div>

                        {/* <div className="qualificaton_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">MERN Stack intern</h3>
                                <span className="qualification_subtitle">Luminar Technolab -Kochi</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023
                                </div>
                            </div>
                        </div> */}

                    </div>


                </div>
            </div>

        </section>
    )
}

export default Qualification