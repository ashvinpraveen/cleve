/// Day 4 - 11:10pm

const OpenAI = require("openai"); //imports openai package
require("dotenv").config(); //allows us to use .env file (where the api key is stored)
console.log(process.env.OPENAI_API_KEY); //prints what's happening, to check which key is being used when we were diagnosing

const openai = new OpenAI({
  //creates new instance of openai
  apiKey: process.env.OPENAI_API_KEY, //points to the .env file to get the api key
});

const response = async () => {
  const openai_response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", //uses gpt-3.5-turbo model
    messages: [
      {
        role: "user", //user is the person interacting with chatGPT
        content: "hello world\n", //input from the user
      },
      {
        role: "assistant", //assistant is the chatGPT
        content: "Hello! How can I help you today?", //output from chatGPT
      },
      {
        role: "user", //user is the person interacting with chatGPT
        content:
          "I'm looking for some help in writing a linkedin post about how I'm learning to use the ChatGPT API's for my AI project.", //input from the user
      },
    ],
    temperature: 0.5, //these are just chatGPT settings, temperature is how creative the response is
    max_tokens: 256, //max tokens is the max length of the response
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return openai_response; //you need the return function to get the response (we didn't have this initially)
};

response().then((response) => console.log(response.json())); //prints response to console, so it's visible

//Stringify the JSON object to make it readable in the console (null, 4) is the indentation

// "Write a short post documenting my journey in learning how to use the OpenAI API. it was pretty tough at first, used Node.JS to build a backend server, with a simple code to communicate with the API and return the response. End your response by asking me a follow up question.";

//

// const openai = require("openai");

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// main();

// import OpenAI from "openai";

// const openai = new OpenAI();

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// main();

// 1am trial *Currently works - kinda****

// const OpenAI = require("openai");

// const openai = new OpenAI({
//  apiKey: process.env.OPENAI_API_KEY,
// });

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "user", content: "hello world, write me a linkedin post about hello world" }],
//     model: "gpt-3.5-turbo",
//     maxtokens: 250,
//     temperature: 0.5,
//   });

//   console.log(completion.choices[0]);
// }

// main();
