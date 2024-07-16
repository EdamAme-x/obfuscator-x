import { Flow } from './components/flow.tsx';
import './App.css';

function App() {
  return (
    <>
      <div className="flex justify-center w-full py-2">
        <h1 className="font-semibold text-2xl font-mono">ObfuscatorX</h1>
      </div>
      <Flow />
    </>
  );
}

export default App;
