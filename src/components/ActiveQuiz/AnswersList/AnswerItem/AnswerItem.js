import React from 'react'
import classes from './AnswerItem.css'


const AnswersItem = props =>{
    const cls = ['.AnswersItem']

    if (props.state){
        cls.push(classes[props.state])
    }

    return(
        <li 
            className={cls.join(' ')}
            onClick={()=>props.onAnsweClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswersItem