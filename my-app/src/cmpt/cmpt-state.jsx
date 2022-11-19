import React from 'react';

function Cmpt1() {
  const [count, setcount] = React.useState(1);

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{count}</div>
      <button onClick={() => setcount(count + 1)}>+++</button>
    </div>
  );
}

function Cmpt11() {
  const [count, setcount] = React.useState({ val: 1 });

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{count.val}</div>
      <button
        onClick={() => {
          count.val = count.val + 1;
          setcount({ val: count.val + 1 });
        }}
      >
        +++
      </button>
    </div>
  );
}

function Cmpt2() {
  const [count, setcount] = React.useState(1);
  const [show, setshow] = React.useState(true);

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      {show ? <div>{count}</div> : null}
      <button
        onClick={() => {
          setshow(!show);
          setcount(count + 1);
        }}
      >
        +++
      </button>
    </div>
  );
}

function Cmpt3() {
  const [count, setcount] = React.useState({ show: true, val: 1 });

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{count.val}</div>
      <button
        onClick={() =>
          setcount({
            show: !count.show,
            val: count.val + 1,
          })
        }
      >
        +++
      </button>
    </div>
  );
}

function Cmpt4() {
  const [count, setcount] = React.useState(1);

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{count.val}</div>
      <button
        onClick={() => {
          setcount((curcount) => curcount + 1);
        }}
      >
        +++
      </button>
    </div>
  );
}

function Cmpt5() {
  const [count, setcount] = React.useState(1);

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{count.val}</div>
      <button
        onClick={() => {
          setTimeout(() => {
            setcount((curcount) => curcount + 1);
            console.log(count);
          }, 0);
        }}
      >
        +++
      </button>
    </div>
  );
}

function Cmpt6() {
  const [count, setcount] = React.useState(1);

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>Cmpt6</div>
      <div>{count.val}</div>
      <button
        onClick={() => {
          setcount((curcount) => {
            const newcount = curcount + 1;
            console.log(newcount);
            return newcount;
          });
        }}
      >
        +++
      </button>
    </div>
  );
}

function Cmpt7() {
  const [count, setcount] = React.useState(1);
  const prevcount = React.useRef();

  React.useEffect(() => {
    prevcount.current = count;
  }, [count]);

  console.log(count, prevcount.current);

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>Cmpt7</div>
      <div>{count.val}</div>
      <button
        onClick={() => {
          setcount((curcount) => curcount + 1);
        }}
      >
        +++
      </button>
    </div>
  );
}

function Cmpt8(props) {
  const [count, setcount] = React.useState(1);

  React.useEffect(() => {
    setcount(props.value);
  }, [props.value]);

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>Cmpt7</div>
      <div>{count.val}</div>
      <button
        onClick={() => {
          setcount((curcount) => curcount + 1);
        }}
      >
        +++
      </button>
    </div>
  );
}

function Cmpt9(props) {
  const [count, setcount] = React.useState(1);

  React.useEffect(() => {
    setcount(props.defaultValue);
  }, []);

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>Cmpt7</div>
      <div>{count.val}</div>
      <button
        onClick={() => {
          setcount((curcount) => curcount + 1);
        }}
      >
        +++
      </button>
    </div>
  );
}

function Cmpt10() {
  const [count, setcount] = React.useState(1);

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>Cmpt10</div>
      <div>{count}</div>
      <div>{count * 2}</div>
      <button
        onClick={() => {
          setcount((curcount) => curcount + 1);
        }}
      >
        +++
      </button>
    </div>
  );
}

export function CmptState() {
  return (
    <div>
      <Cmpt1></Cmpt1>
      <Cmpt11></Cmpt11>
      <Cmpt2></Cmpt2>
      <Cmpt3></Cmpt3>
      <Cmpt4></Cmpt4>
      <Cmpt5></Cmpt5>
      <Cmpt6></Cmpt6>
      <Cmpt7></Cmpt7>
      <Cmpt8></Cmpt8>
      <Cmpt9></Cmpt9>
      <Cmpt10></Cmpt10>
    </div>
  );
}
