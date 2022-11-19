import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Form1 } from './form/form1';
import { Form2 } from './form/form2';
import { Form3 } from './form/form3';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
