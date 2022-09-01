import './App.css';
import Head from './components/Head'
import Nav from './components/Nav'
import Github from './pages/Github'
import Fetch from './pages/Fetch'
import Pubsub from './pages/Pubsub'
import Nested from './pages/Nested'

import { Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="row">
        <Head />
      </div>
      <div className="row">
        <Nav />
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <Routes>
                <Route path="/github" element={<Github />} />
                <Route path="/fetch" element={<Fetch />} />
                <Route path="/pubsub" element={<Pubsub />} />
                <Route path="/nestedRoutes/*" element={<Nested />} />
                <Route path="*" element={<Navigate to="/github" />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
