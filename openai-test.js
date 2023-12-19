
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



// 1am trial

const OpenAI = require("openai");

const openai = new OpenAI({
 apiKey: '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',
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();


//1:30am trial

// const OpenAI = require("openai");

// const openai = new OpenAI({
//   apiKey: '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',
// });

// async function main() {

//     const response = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [
//             {
//             role: "system",
//             content: "write me a post about using openai api"
//             }
//         ],
//         temperature: 0.5,
//         max_tokens: 234,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//     });

//     console.log(response.choices[0]);

// main();
// }


// const result = await openai.chat.completions.create({
//  model: "gpt-3.5-turbo",
//  messages: [
//    {
//      role: "system",
//      content: "You are a helpful assistant. You can help with graphic design tasks",
//    },
//    // ...chats
//  ],
// });

// console.log(result.choices[0].message.content);