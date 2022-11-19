import { Route, Routes } from 'react-router-dom';
import { Form1 } from './form1';

export const FormRouting = () => {
  return (
    <Routes>
      <Route path="/form1" element={<Form1 />} />
    </Routes>
  );
};
