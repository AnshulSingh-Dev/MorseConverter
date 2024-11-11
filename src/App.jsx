import React from "react";
import { useState } from "react";

// Morse code mappings
const morseCodeMapping = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---',
  K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-',
  U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..',
  '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
  ' ': ' / ',
};

// Reverse mapping for decoding
const textMapping = Object.fromEntries(
  Object.entries(morseCodeMapping).map(([key, value]) => [value, key])
);

function App() {
  const [text, setText] = useState('');
  const [morse, setMorse] = useState('');

  const convertToMorse = () => {
    const morseResult = text
      .toUpperCase()
      .split('')
      .map(char => morseCodeMapping[char] || char)
      .join(' ');
    setMorse(morseResult);
  };

  const convertToText = () => {
    const textResult = morse
      .trim()
      .split(' ')
      .map(morseChar => textMapping[morseChar] || ' ')
      .join('');
    setText(textResult);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Morse Code Converter</h1>
        
        <div className="space-y-6">
          <div className="converter-section">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Text to Morse</h2>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button 
              className="w-full mt-3 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
              onClick={convertToMorse}
            >
              Convert to Morse
            </button>
            <p className="mt-2 text-gray-600">Output (Morse): <span className="font-mono">{morse}</span></p>
          </div>

          <div className="converter-section">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Morse to Text</h2>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter Morse code here..."
              value={morse}
              onChange={(e) => setMorse(e.target.value)}
            />
            <button 
              className="w-full mt-3 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
              onClick={convertToText}
            >
              Convert to Text
            </button>
            <p className="mt-2 text-gray-600">Output (Text): <span className="font-mono">{text}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;