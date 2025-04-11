import NxWelcome from './nx-welcome';
import '../styles.css';
import { withSaltDS , SaltButton} from '@org/saltDS';
export function App() {
  const test = () => {
    console.log('Test');
  };

  return withSaltDS(
      <div>
        <SaltButton >Helloo</SaltButton>
        <NxWelcome title="reports" />
        <button onClick={test}>Helloo1</button>
      </div>
  );
}

export default App;
