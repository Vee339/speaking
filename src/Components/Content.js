import React from "react"
import questionsData from '../questionsData.js'
import {AudioRecorder, useAudioRecorder} from "react-audio-voice-recorder"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'


function Content(){

    
    const {
        startRecording,
        stopRecording
    } = useAudioRecorder()

    const [question, setQuestion] = React.useState({
        heading:"",
        hints : []
    })

    const recorderControls = useAudioRecorder()


    const [refresh, setRefresh] = React.useState(0)
    

    React.useEffect(function(){
        if(questionsData){
            const randomNo = Math.floor(Math.random() * questionsData.length) 
         
            let headinggg = questionsData[randomNo].heading
            let hintsss = questionsData[randomNo].hints
            setQuestion({
              heading: headinggg,
              hints: hintsss
            })
        }else{
           document.write("loading")
        }
        
         
    },[refresh])

  const sugg = question.hints.map((hint) => {
      return(
          <li>{hint}</li>
      )
  })

  function renderQuestion(){
        setRefresh(refresh + 1)
        
  }


   
    const addAudioElement = (blob) => {
         const url = URL.createObjectURL(blob)
         const audio = document.createElement('audio')
         audio.src = url
         audio.controls = true
         document.getElementsByClassName('recordings')[0].appendChild(audio)
    }

    return(
        <>
            <div className="content">
                <div className="question">
                        <h4>{question.heading}</h4>
                        <br />
                        <span>You should say:</span> 
                        <ul>
                           {sugg} 
                        </ul>
                    </div>
                <div className="action">
                    <button className="record">
                       <AudioRecorder 
                            onRecordingComplete={(blob) => addAudioElement(blob)}
                            recorderControls={recorderControls} 
                        />
                    </button>
                    <button className="refresh" onClick={renderQuestion}>
                        <FontAwesomeIcon icon={faArrowsRotate} />
                    </button>
                </div>
                
            </div>
            <div className="recordings">
        
            </div>
        </>
    ) 
}

export default Content