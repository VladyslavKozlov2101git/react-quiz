import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component{
    state={
        activeQuestion:0,
        quiz:[
            {
                question:'Какого цвета небо?',
                rightAnswer:2,
                id:1,
                answers:[
                    {text:"Вопрос 1", id:1},
                    {text:"Вопрос 2", id:2},
                    {text:"Вопрос 3", id:3},
                    {text:"Вопрос 4", id:4},
                    {text:"Вопрос 5", id:5}
                ]
            },
            {
                question:'Сколько тебе лет?',
                rightAnswer:3,
                id:2,
                answers:[
                    {text:"2", id:1},
                    {text:"12", id:2},
                    {text:"22", id:3},
                    {text:"32", id:4},
                    {text:"42", id:5}
                ]
            }
        ]
    }


    onAnsweClickHandler = (answersId) =>{
        console.log('AnswerId', answersId)
        this.setState({
            activeQuestion:this.state.activeQuestion + 1
        })
    }

    render(){
        return(
            <div className="Quiz"> 
                
                <div className='QuizWrapper'>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnsweClick={this.onAnsweClickHandler}
                        quizLengh={this.state.quiz.length}
                        answerNumber = {this.state.activeQuestion +1}
                    />
                </div>
            </div>

        )
    }
}

export default Quiz