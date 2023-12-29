// RecordButton.js
import React, { useState, useRef } from 'react';
import { speechToText, isAudioTooLong } from '../../services/speech'

const RecordButton = ({ onTranscriptionsCompleted }) => {
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

  const handleDataAvailable = async (event) => {
    const audioURL = URL.createObjectURL(event.data);
    setAudioURL(audioURL);

    const blob = new Blob([event.data], { type: "audio/ogg" });

    if (isAudioTooLong(blob)) {
      alert('Audio too long.  Consider a shorter description of the photo.');
      return;
    }

    const text = await speechToText(event.data)
    console.log(text)
    onTranscriptionsCompleted(text)

  }

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

