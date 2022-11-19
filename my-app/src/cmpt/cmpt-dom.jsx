import React from 'react';
import { findDOMNode } from 'react-dom';

function Cmpt1() {
  const dom = React.useRef(null);

  const [val, setval] = React.useState('yanhajing');
  const [more, setmore] = React.useState(false);

  React.useEffect(() => {
    console.log(dom.current.clientHeight);
    if (dom.current.clientHeight > 30) {
      setmore(true);
    }
  });

  return (
    <div style={{ border: '1px solid red', margin: 10, width: 200 }}>
      <div ref={dom}>{val}</div>
      {more ? <div>太长了</div> : null}
      <textarea
        type="text"
        value={val}
        onChange={(e) => setval(e.target.value)}
      />
    </div>
  );
}

function Cmpt2() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const wrap = findDOMNode(ref.current);
    console.log(wrap.querySelector('#yan'));
  }, []);

  return (
    <div ref={ref} style={{ border: '1px solid red', margin: 10, width: 200 }}>
      <div id="yan">yan</div>
    </div>
  );
}

export function CmptDom() {
  return (
    <div>
      <Cmpt1></Cmpt1>
      <Cmpt2></Cmpt2>
    </div>
  );
}
