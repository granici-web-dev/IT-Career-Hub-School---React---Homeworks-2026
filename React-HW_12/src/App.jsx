import { useState } from 'react';
import ValueDisplay from './components/ValueDisplay';

function App() {
  const [text, setText] = useState('Some input text');

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Current and Previous Value</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-4 py-2 border border-slate-300 rounded-lg text-lg
                   focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
      />

      <ValueDisplay value={text} />
    </div>
  );
}

export default App;
