// RecordButton.js
import React, { useState, useRef } from 'react';

const RecordButton = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const mediaRecorder = useRef(null);

  const startRecording = async () => {
    if (recording) return; // Already recording

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = handleDataAvailable;
      mediaRecorder.current.start();

      setRecording(true);
    } catch (error) {
      console.error("Error accessing the microphone:", error);
    }
  };

  const stopRecording = () => {
    if (!recording) return; // Not currently recording

    mediaRecorder.current.stop(); // Stop the recording
    setRecording(false);
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setAudioURL(URL.createObjectURL(event.data));


      // make a speech to text request

    }
  };



  return (
    <div>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {audioURL && (
        <audio src={audioURL} controls="controls" />
      )}
    </div>
  );
};

export default RecordButton;
