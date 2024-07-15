import React from 'react'
import SingleQuestion from './SingleQuestion'
import QuestionsData from './QuestionsData'

export default function Questions() {

const [questions, setQuestions] = React.useState(QuestionsData)

const [expandedQuestionId, setExpandedQuestionId] = React.useState(null);

const handleToggle = (id) => {
  setExpandedQuestionId(id === expandedQuestionId ? null : id);
};


const singleElement = questions.map((items)=>{
    return(
        <SingleQuestion 
        key={questions.id}
        {...items}
        isOpen={expandedQuestionId === items.id}
        onToggle={handleToggle}
    />
    )
})

  return (
    <div>
      <div className='flex flex-col justify-center items-center min-h-screen bg-pink-400 tracking-wider'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mt-10 text-center text-white'>JavaScript Questions</h1>
        
        <div className='my-10 mx-5'>
          {singleElement}
        </div>
      
      </div>
    </div>
  )
}
