import React from 'react';

const MyContext = React.createContext({
  val: 1,
  setval: () => {},
});

function Cmpt1() {
  return <Cmpt2></Cmpt2>;
}

function Cmpt2() {
  return <Cmpt3></Cmpt3>;
}

function Cmpt3() {
  const { val, setval } = React.useContext(MyContext);
  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{val}</div>
      <button onClick={() => setval(val + 1)}>+++</button>
    </div>
  );
}

export function CmptContext() {
  const [val, setval] = React.useState(1);
  return (
    <div>
      <MyContext.Provider value={{ val, setval }}>
        <Cmpt1></Cmpt1>
      </MyContext.Provider>
    </div>
  );
}
