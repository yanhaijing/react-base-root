import React from 'react';
import './style-react.css';
import * as classNames from 'classnames';

function Cmpt1() {
  return (
    <div style={{ color: 'red' }}>
      <span>123</span>
    </div>
  );
}

function Cmpt2() {
  return (
    <div style={{ marginTop: 10, borderTop: '10px' }}>
      <span>123</span>
    </div>
  );
}

function Cmpt3() {
  return (
    <div className="cmpt3">
      <span>123</span>
    </div>
  );
}

function Cmpt4() {
  return (
    <div className="cmpt31 cmpt32 cmpt33">
      <span>123</span>
    </div>
  );
}

function Cmpt5() {
  const [flag, setflag] = React.useState(false);

  return (
    <div className={`cmpt5 ${flag ? 'cmpt51' : 'cmpt52'}`}>
      <span>123</span>

      <button
        onClick={() => {
          setflag(!flag);
        }}
      >
        切换
      </button>
    </div>
  );
}

function Cmpt6() {
  const [flag, setflag] = React.useState(false);

  return (
    <div className={classNames('cmpt5', { cmpt51: flag, cmpt52: !flag })}>
      <span>123</span>

      <button
        onClick={() => {
          setflag(!flag);
        }}
      >
        切换
      </button>
    </div>
  );
}

export function StyleReact() {
  return (
    <div>
      <Cmpt1></Cmpt1>
      <Cmpt2></Cmpt2>
      <Cmpt3></Cmpt3>
      <Cmpt4></Cmpt4>
      <Cmpt5></Cmpt5>
      <Cmpt6></Cmpt6>
    </div>
  );
}
