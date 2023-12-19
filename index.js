import OpenAI from 'openai';

const openai = new OpenAI({
 apiKey: process.env. OPENAI_API_KEY,
});

const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Hello!"}],
   });
   console.log(chatCompletion.choices[0].message.content);
   









// const { OpenAIApi } = require("openai");

// //import OpenAI from "openai";

// // const openai = new OpenAI();

// // async function main() {
// //   const completion = await openai.chat.completions.create({
// //     messages: [{ role: "system", content: "You are a helpful assistant." }],
// //     model: "gpt-3.5-turbo",
// //   });

// //   console.log(completion.choices[0]);
// // }

// // main();



// //import OpenAI from 'openai';

// // const openai = new OpenAI({
// //   apiKey: process.env['OPENAI_API_KEY'],
// // });


// // import OpenAI from "openai";

// const { Configuration, OpenAIApi } = require("openai"); //import the configuration from openAI

//   const config = new Configuration({

//       apiKey: process.env.OPENAI_API_KEY,

//      });


// //const openai = new OpenAIApi(config);

// const runPrompt = async () => {
    
//     const prompt = "Write a short post documenting my journey in learning how to use the OpenAI API. it was pretty tough at first, used Node.JS to build a backend server, with a simple code to communicate with the API and return the response. End your response by asking me a follow up question.";
    
//     const response = await openai.createCompletion ({
//         model: "gpt-3.5-turbo-1106",
//         prompt: prompt,
//         max_tokens: 2048,
//         temperature: 0.5, // 0 = no creativity, 1 = lots of creativity, using 0.5 for something more structured, coherent and clear (see the cheatsheet shared by Wing Kin).
//     });

//     console.log(response.data);


// };

// runPrompt();