import React from 'react'

const WorkItems = ({ item }) => {
    return (
        <div className='work_card' key={item.id}>
            <img src={item.Image} className='work_img' alt="" />
            <h3 className='work_title'>{item.title}</h3>
            <a href={item.live} className='work_button'>
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}

export default WorkItems