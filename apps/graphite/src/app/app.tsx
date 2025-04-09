import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
const Refdata = React.lazy(() => import('refdata/Module'));
const Reports = React.lazy(() => import('reports/Module'));
import {testFunc} from "@org/dynotrace";

export function App() {

  const generateError = ()=>{
    console.log('Test' , testFunc('Test'));
    console.log('dtrum is defined',window.dtrum);
  }
  // React.useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //           .then(response => {
  //               return response.json();
  //           })
  //           .then(data => {
  //           })
  //           .catch(error => {});
  // }, []);
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
      <button onClick={generateError}>Generate Error</button>
      <Routes>
        <Route path="/" element={<NxWelcome title="@org/graphite" />} />
        <Route path="/refdata" element={<Refdata />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
