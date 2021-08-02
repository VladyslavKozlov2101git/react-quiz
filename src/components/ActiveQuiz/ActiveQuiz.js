import React from 'react'
import './ActiveQuiz.css'
import AnswersList from './AnswersList/AnswersList'



const ActiveQuiz = props => (
    <div className='ActiveQuiz'>
        <p className='Question'>
            <span>
                <strong>
                    2 
                </strong>&nbsp;
                 {props.question}
            </span>
            <small> 4 из 12 </small>
        </p>
        <AnswersList
            answers={props.answers}
            onAnsweClick={props.onAnsweClick}
        />
    </div>
)

export default ActiveQuiz