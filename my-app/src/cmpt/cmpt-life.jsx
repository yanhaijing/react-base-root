import React from 'react';

function Cmpt1() {
  const [count, setcount] = React.useState(1);

  React.useEffect(() => {
    const tid = window.setInterval(() => {
      setcount((count) => count + 1);
    }, 1000);

    return () => {
      window.clearInterval(tid);
    };
  }, []);

  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{count}</div>
      <button onClick={() => setcount(count + 1)}>+++</button>
    </div>
  );
}

export function CmptLife() {
  return (
    <div>
      <Cmpt1></Cmpt1>
    </div>
  );
}
