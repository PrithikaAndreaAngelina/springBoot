import './App.css';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import ListStudent from './ListStudent';
import CreateStudent from './CreateStudent';
import ViewStudentComponent from './ViewStudent';

export default function App() {
  return (
    <Routes>
              <Route path="/" element={<ListStudent />}/>
              <Route path="/post" element={<CreateStudent />}/>
              <Route path="/student" element={ <ViewStudentComponent />}/>
                </Routes>
  )
}