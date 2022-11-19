import React from 'react';

function Cmpt11(props) {
  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{props.count}</div>
      <button onClick={() => props.onChange(props.count + 1)}>+++</button>
    </div>
  );
}

function Cmpt1() {
  const [count, setcount] = React.useState(10);

  return <Cmpt11 count={count} onChange={setcount}></Cmpt11>;
}

function Cmpt2() {
  const [val, setval] = React.useState(10);

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{String(val).toUpperCase()}</div>
      <input type="text" value={val} onChange={(e) => setval(e.target.value)} />
    </div>
  );
}

function Cmpt3() {
  const [val, setval] = React.useState(10);
  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <input
        type="text"
        value={val}
        onChange={(e) => {
          e.persist();
          window.setTimeout(() => {
            console.log(e.target.value);
          });
        }}
      />
    </div>
  );
}

function Cmpt42(props) {
  return (
    <div style={{ border: '1px solid red', margin: 10 }}>{props.count}</div>
  );
}

function Cmpt41() {
  const [val, setval] = React.useState(1);

  React.useEffect(() => {
    setTimeout(() => {
      setval(2);
    }, 1000);
  }, []);

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <Cmpt42 count={val}></Cmpt42>
    </div>
  );
}

function Cmpt52(props, ref) {
  const [count, setcount] = React.useState(1);

  React.useImperativeHandle(ref, () => ({
    update: (val) => {
      setcount(val);
    },
  }));

  return <div style={{ border: '1px solid red', margin: 10 }}>{count}</div>;
}
Cmpt52 = React.forwardRef(Cmpt52);

function Cmpt51() {
  const child = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      child.current?.update(2);
    }, 1000);
  }, []);

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <Cmpt52 ref={child}></Cmpt52>
    </div>
  );
}

function Cmpt62(props) {
  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <input type="text" onChange={(e) => props.onChange(e.target.value)} />
    </div>
  );
}

function Cmpt61() {
  const [count, setcount] = React.useState(1);
  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{count}</div>
      <Cmpt62 onChange={(val) => setcount(val)}></Cmpt62>
    </div>
  );
}

export function CmptEvent() {
  return (
    <div>
      <Cmpt1></Cmpt1>
      <Cmpt2></Cmpt2>
      <Cmpt3></Cmpt3>
      <Cmpt41></Cmpt41>
      <Cmpt51></Cmpt51>
      <Cmpt61></Cmpt61>
    </div>
  );
}
