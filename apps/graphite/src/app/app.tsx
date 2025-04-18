import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
// import { eventBus } from '@org/logger-utils';
const Refdata = React.lazy(() => import('refdata/Module'));
const Reports = React.lazy(() => import('reports/Module'));
import {
  // sendLog , 
  initWasm , 
  readFromFile,
  writeToFile
} from "@org/logger-utils";
export function App() {

  // const  generateLog = ()=>{
  //   console.log('Test' , sendLog('USER_LOGGED' , { eventName: 'click', message : "Hi this is a test log message" }));
  //   console.log('dtrum is defined',window.dtrum);
  // }
  // React.useEffect(() => {
  //   // Subscribe to events from Node MFE
  //   const subscription = eventBus.on('NODE_MESSAGE').subscribe(data => {
  //     console.log('Message received from Node MFE:', data);
  //   });
    
  //   // Clean up subscription
  //   return () => subscription.unsubscribe();
  // }, []);
  
  // const sendMessageToNode = () => {
  //   // Emit event to Node MFE
  //   console.log('Sending message to Node MFE');
  //   eventBus.emit('REACT_MESSAGE', { 
  //     message: 'Hello from React!',
  //     timestamp: new Date().toISOString()
  //   });
  // };
  React.useEffect(() => {
    // Must init WASM before using functions
    initWasm().then(() => console.log('WASM initialized'));
  }, []);

  const handleWrite = () => {
    writeToFile('example.txt', 'Hello from WASM!');
    console.log('Data written');
  };

  const handleRead = async() => {
    const result = await readFromFile('example.txt');
    console.log(result)
  };
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/refdata">Refdata</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
      </ul>
      {/* <button onClick={generateLog}>Generate Log</button> */}
      {/* <br /> */}
      <button onClick={handleWrite} style={{ marginRight: 10 }}>Write to WASM</button>
      <br />
      <button onClick={handleRead}>Read from WASM</button>
      <Routes>
        <Route path="/" element={<NxWelcome title="@org/graphite" />} />
        <Route path="/refdata" element={<Refdata />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
