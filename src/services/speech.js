import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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", // This is the default and can be omitted
});

async function chat() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
  });
}
