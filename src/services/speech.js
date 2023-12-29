

const API_URL = "https://api.openai.com/v1/audio/transcriptions";
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;


const isAudioTooLong = (blob) => blob.size >= 25 * 1000000;


const speechToText = (data) =>  new Promise((resolve, reject) => {
  const formData = new FormData();
  const blob = new Blob([event.data], { type: "audio/ogg" });

  formData.append("file", blob);
  formData.append("model", "whisper-1");

  fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    body: formData,
  })
  .then((response) => response.json())
  .then((data) => {
    resolve(data.text)
  })
  .catch((error) => {
    console.error("Error:", error);
    reject(error)
  });


})



export { isAudioTooLong, speechToText }
