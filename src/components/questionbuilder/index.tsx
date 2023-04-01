import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import { type Message } from '~/types/openai.interface'
const config = new Configuration({

  apiKey: process.env.NEXT_PUBLIC_OPENAI_SECRET
})
const openai = new OpenAIApi(config)





const QuestionBuilder = () => {
  const [promtMessage, setPromptMessage] = useState('')
  const [messages, setMessages] = useState<Message>()
  const [loading, setLoading] = useState(false)

  const handleGenerateQuestion = async () => {
// + 'and along with their answers in JSON format' 
    setLoading(true)
    await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { "role": "system", "content": "You are a QA Tester" },
        { role: 'user', content: promtMessage }
      ]
    })
      .then((response) => {
        const tempAssistRes = response.data.choices[0]?.message
        if (tempAssistRes) {
          setMessages(tempAssistRes)

        }
      })
      .catch((err) => console.log(err))
      .finally(() => {

        setLoading(false)
      })



  }


  const content = messages?.content ?? ''


  return (
    <div className='container h-screen py-5'>
      <div className="w-3/4 mx-auto">
        <label className="block mb-2 text-gray-700 font-bold" htmlFor="message">
          Prompt
        </label>
        <textarea
          value={promtMessage}
          className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          id="message"
          name="message"
          rows={5}
          onChange={(e) => setPromptMessage(e.target.value)}
          placeholder="Create a question about earth..."
        >

        </textarea>
        <div className='flex justify-end space-x-2'>
          <button className=' border rounded-md px-2 py-1 bg-sky-600 text-white' onClick={() => void handleGenerateQuestion()}>Generate Question</button>
          <button className=' border rounded-md px-2 py-1 bg-warning-700 text-white'>Reset</button>
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        {
          loading ? <p>Loading....</p> : content
        }

      </div>
    </div>
  )
}

export default QuestionBuilder