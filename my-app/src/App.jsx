import { Route, Routes, Link, Navigate, Outlet } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { loadable } from './hoc/loadable';
import { JsxClass } from './jsx/jsx-class';
import { JsxXss } from './jsx/jsx-xss';
import { JsxHtml } from './jsx/jsx-html';
import { JsxBase } from './jsx/jsx-base';
import { CmptProps } from './cmpt/cmpt-props';
import { CmptState } from './cmpt/cmpt-state';
import { CmptLife } from './cmpt/cmpt-life';
import { CmptEvent } from './cmpt/cmpt-event';
import { CmptContext } from './cmpt/cmpt-context';
import { CmptDom } from './cmpt/cmpt-dom';
import { StyleReact } from './style/style-react';
import { StyleModule } from './style/style-module';
import { FormRouting } from './form/form-routing';

const HelloRouting = loadable(() =>
  import('./hello/hello-routing').then((m) => m.HelloRouting)
);

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="hello/hello">hello</Link> / <Link to="hello2">hello2</Link>
      </li>
      <li>
        <Link to="jsx-base">jsx-base</Link>
      </li>
      <li>
        <Link to="jsx-class">jsx-class</Link>
      </li>
      <li>
        <Link to="jsx-xss">jsx-xss</Link>
      </li>
      <li>
        <Link to="jsx-html">jsx-html</Link>
      </li>
      <li>
        <Link to="cmpt-props">cmpt-props</Link>
      </li>
      <li>
        <Link to="cmpt-state">cmpt-state</Link>
      </li>
      <li>
        <Link to="cmpt-life">cmpt-life</Link>
      </li>
      <li>
        <Link to="cmpt-event">cmpt-event</Link>
      </li>
      <li>
        <Link to="cmpt-context">cmpt-context</Link>
      </li>
      <li>
        <Link to="cmpt-dom">cmpt-dom</Link>
      </li>
      <li>
        <Link to="style-react">style-react</Link>
      </li>
      <li>
        <Link to="style-module">style-module</Link>
      </li>
    </ul>
  );
};

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        paddingTop: '40vh',
        justifyContent: 'center',
        fontSize: 40,
      }}
    >
      <div>404，你迷路了</div>
    </div>
  );
};

const PrivilegeGuard = (props) => {
  const hasPrivilege = true;
  if (!hasPrivilege) {
    return <Navigate to={'/404'} replace />;
  }
  return props.children ? <>{props.children}</> : <Outlet />;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivilegeGuard />}>
            <Route path="/hello/*" element={<HelloRouting />} />
            <Route path="/hello2" element={<Navigate replace to="/hello" />} />
            <Route path="/jsx-base" element={<JsxBase />} />
            <Route path="/jsx-class" element={<JsxClass />} />
            <Route path="/jsx-xss" element={<JsxXss />} />
            <Route path="/jsx-html" element={<JsxHtml />} />
            <Route path="/cmpt-props" element={<CmptProps />} />
            <Route path="/cmpt-state" element={<CmptState />} />
            <Route path="/cmpt-life" element={<CmptLife />} />
            <Route path="/cmpt-event" element={<CmptEvent />} />
            <Route path="/cmpt-context" element={<CmptContext />} />
            <Route path="/cmpt-dom" element={<CmptDom />} />
            <Route path="/style-react" element={<StyleReact />} />
            <Route path="/style-module" element={<StyleModule />} />
            <Route path="/style-module" element={<StyleModule />} />
            <Route path="/form/*" element={<FormRouting />} />
          </Route>

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
