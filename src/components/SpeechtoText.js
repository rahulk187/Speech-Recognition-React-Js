import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect } from 'react';

const SpeechtoText = () => {

    const { transcript, resetTranscript } = useSpeechRecognition();

    // useEffect(() => {
    //     SpeechRecognition.startListening({ continuous: true });
    //     console.log('listening start..')
    // })

    return (
        <div>
            <textarea defaultValue={transcript} /><br />
            <button onClick={resetTranscript}>Clear</button>
            <button 
                onClick={()=>{
                    SpeechRecognition.startListening({ continuous: true, language: 'hi-HI'});
                    console.log('listening start..');
                }}
                >Start</button>
            <button 
                onClick={()=>{
                    SpeechRecognition.stopListening();
                    console.log('listening stop..');
                }}
                >Stop</button>
        </div>
    )
}

export default SpeechtoText
