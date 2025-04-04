import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Refdata = React.lazy(() => import('refdata/Module'));
const Reports = React.lazy(() => import('reports/Module'));

export function App() {
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
      <Routes>
        <Route path="/" element={<NxWelcome title="@org/graphite" />} />
        <Route path="/refdata" element={<Refdata />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
