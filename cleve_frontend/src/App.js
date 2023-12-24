// Importing useState hook from React
import { useState } from "react";

// Importing components
import Message from "./components/Message";
import Input from "./components/Input";
import History from "./components/History";
import Clear from "./components/Clear";

// Importing CSS file
import "./App.css";

// Defining the App component
export default function App() {
  // Setting up state variables using useState hook
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);

  // Function to handle form submission
  const handleSubmit = async () => {
    // Creating a prompt object with user input
    const prompt = {
      role: "user",
      content: input,
    };

    // Adding the prompt to the messages state
    setMessages([...messages, prompt]);

    // Sending a POST request to OpenAI API for chat completions

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [...messages, prompt],
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        const res = data.choices[0].message.content;
        setMessages((messages) => [
          ...messages,
          {
            role: "assistant",
            content: res,
          },
        ]);
        setHistory((history) => [...history, { question: input, answer: res }]);
        setInput("");
      });
  };

  const clear = () => {
    setMessages([]);
    setHistory([]);
  };

  // Rendering the App component
  return (
    <div className="App">
      <div className="Column">
        <h3 className="Title">Chat Messages</h3>
        <div className="Content">
          {/* Rendering each message */}
          {messages.map((el, i) => {
            return <Message key={i} role={el.role} content={el.content} />;
          })}
        </div>
        {/* Rendering the input component */}
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={input ? handleSubmit : undefined}
        />
      </div>
      <div className="Column">
        <h3 className="Title">History</h3>
        <div className="Content">
          {/* Rendering each history item */}
          {history.map((el, i) => {
            return (
              <History
                key={i}
                question={el.question}
                onClick={() =>
                  setMessages([
                    { role: "user", content: history[i].question },
                    { role: "assistant", content: history[i].answer },
                  ])
                }
              />
            );
          })}
        </div>
        {/* Rendering the clear button */}
        <Clear onClick={clear} />
      </div>
    </div>
  );
}

// import Chat from "./components/Chat";
// import "./App.css";

// const name = "John";

// function App() {
//   return (
//     <>
//       <h1>{name}'s cleve chat</h1>
//       <>
//         <Chat />
//       </>
//       <p>is this working?</p>
//     </>
//   );
// }

// export default App;

// // import logo from "./logo.svg";
// // import "./App.css";

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           hello world, ashvin here, I'm a watermelon, with a peanut Edit{" "}
// //           <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Get started with Cleve
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// // export default App;
