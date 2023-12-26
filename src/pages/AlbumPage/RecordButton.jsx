// RecordButton.js
import React, { useState, useRef } from 'react';
const token = import.meta.env.VITE_OPENAI_API_KEY;

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
    const audioURL = URL.createObjectURL(event.data);
    setAudioURL(audioURL);

    const apiUrl = 'https://api.openai.com/v1/audio/transcriptions';

    const formData = new FormData();
    const blob = new Blob([event.data], { type: "audio/ogg" });

    if (isAudioTooLong(blob)) {
      alert('Audio too long.  Consider a shorter description of the photo.');
      return;
    }

    formData.append('file', blob);
    formData.append('model', 'whisper-1');

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
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


function isAudioTooLong (blob) {
  return blob.size >= 25 * 1000000;
}