// Day 7 - 11:10pm

// Pseudocode
// - Via console log, user can input their occupation, goals on social media and their target audience
// - these inputs would be saved as variables
// - the variables are strung together to form a full context sentence
// - the context sentence is strung together with any prompts the user writes to form a full prompt that would be likely tailored to the user's needs.
// - these would be fed into chatGPT to generate a response

const readline = require("readline"); //imports readline package, allows us to use readline, which allows us to take user input, and use it as a variable

let fullPrompt = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your occupation? ", (occupation) => {
  rl.question("What are your goals on social media? ", (goals) => {
    rl.question("Who is your target audience? ", (targetAudience) => {
      const context = `As a ${occupation}, my goals on social media are ${goals}. My target audience is ${targetAudience}.`;
      rl.question(
        "What's something interesting that happened this week?: ",
        (prompt) => {
          fullPrompt = `${context}. You are a ghostwriter to help users expand on their writing and content. Write the content directly without explanations. Keep it structured, with short sentences and ensure language used is simple and cohesive. Don't use any emojis and make it sound conversational, like you're texting or emailing someone. Here's the content the writing should be based on: ${prompt}`;

          // Now call the OpenAI API function here
          response(fullPrompt)
            .then((result) => console.log(JSON.stringify(result, null, 4)))
            .catch((error) =>
              console.log("You fked up, check the code again.", error)
            );

          rl.close();
          console.log(fullPrompt);
        }
      );
    });
  });
});

// const context = `As a social media growth consultant, my goals on social media are building a community of builders and hackers, getting more followers and ultimately getting leads for my social media growth business. My target audience is busy founders, CEO's and tech startup founders in Series A or B. Write a concise post based on the content shared in the discussion below.`;

const OpenAI = require("openai"); //imports openai package
require("dotenv").config(); //allows us to use .env file (where the api key is stored)
console.log(); //prints what's happening, to check which key is being used when we were diagnosing

const openai = new OpenAI({
  //creates new instance of openai
  apiKey: process.env.OPENAI_API_KEY, //points to the .env file to get the api key
});

const response = async (fullPrompt) => {
  const openai_response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", //uses gpt-3.5-turbo model
    messages: [
      {
        role: "system", //system is invisible to the user, it's the instructions for chatGPT
        content:
          "You are a ghostwriter to help users write great content. Write the content directly without explanations. Keep it structured, with short sentences and ensure language used is simple and cohesive. Don't use any emojis and make it sound conversational.", //telling the system how to write
      },
      {
        role: "assistant", //assistant is the chatGPT
        content: "Hello! How can I help you today?", //output from chatGPT
      },
      {
        role: "user", //user is the person interacting with chatGPT
        content: fullPrompt, //input from the user
      },
    ],
    // stream: true,
    temperature: 0.9, //these are just chatGPT settings, temperature is how creative the response is
    max_tokens: 500, //max tokens is the max length of the response
    top_p: 1, //top p is the probability of the response being the correct one (1 is 100%) - this is the default
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  // for await (const chunk of stream) {
  //   process.stdout.write(chunk.choices[0]?.delta.content || "");
  // }
  return openai_response; //you need the return function to get the response (we didn't have this initially)
};

// response()
//   .then((result) => console.log(JSON.stringify(result, null, 4))) //prints response to console, so it's visible. Then turns the JSON to a string
//   .catch((error) => console.log("OpenAI fked up, not our fault", error)); //prints error to console, so it's visible

//Future things I'd like to add
// - Streaming of information,https://platform.openai.com/docs/api-reference/streaming. allows us to stream the response, like how chatGPT has the letter by letter typing of the response.

//, Write a post documenting my journey in learning how to use the OpenAI API. it was pretty tough at first, used Node.JS to build a backend server, with a simple code to communicate with the API and return the response. End your response by asking me a follow up question. Keep it concise.

// I was managing an overhaul of a jet engine. We encountered some problems in the removal of the fins. Brought in an expert from france and managed to open up the engine after a while. Replaced the parts and glad to see it running again. Learned a lot about great team dynamics and team work.
