import NxWelcome from './nx-welcome';
import '../styles.css';

export function App() {
  const test = () => {
    console.log('Test');
    //@ts-ignore
    console.log('dtrum is defined', window.dtrum);
  }
  return (
    <div>
      <NxWelcome title="reports" />
      <button onClick={test} >Helloo</button>
    </div>
  );
}

export default App;
