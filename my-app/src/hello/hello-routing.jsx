import { Route, Routes } from 'react-router-dom';
import { Hello } from './index';
import { Hello3 } from './hello3';

export const HelloRouting = () => {
  return (
    <Routes>
      <Route path="/hello" element={<Hello />} />
      <Route path="/hello3" element={<Hello3 />} />
    </Routes>
  );
};
