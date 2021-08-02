import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component{
    state={
        quiz:[
            {
                question:'Какого цвета небо?',
                rightAnswer:2,
                answers:[
                    {text:"Вопрос 1", id:1},
                    {text:"Вопрос 2", id:2},
                    {text:"Вопрос 3", id:3},
                    {text:"Вопрос 4", id:4},
                    {text:"Вопрос 5", id:5}
                ]
            }
        ]
    }


    onAnsweClickHandler = (answersId) =>{
        console.log('AnswerId', answersId)
    }

    render(){
        return(
            <div className="Quiz"> 
                
                <div className='QuizWrapper'>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                        question={this.state.quiz[0].question}
                        onAnsweClick={this.onAnsweClickHandler}
                    />
                </div>
            </div>

        )
    }
}

export default Quiz