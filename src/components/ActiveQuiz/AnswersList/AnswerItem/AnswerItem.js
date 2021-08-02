import React from 'react'
import './AnswerItem.css'


const AnswersItem = props =>{
    return(
        <li 
            className='AnswersItem'
            onClick={()=>props.onAnsweClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswersItem