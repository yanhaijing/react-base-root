import * as React from 'react';

const Cmpt4: React.FC<{ name: string }> = (props) => {
  const name = String(props.name);
  const [count, setcount] = React.useState(1);
  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{name.toUpperCase()}</div>
    </div>
  );
};

export function CmptProps() {
  return (
    <div>
      <Cmpt4 name={123}></Cmpt4>
    </div>
  );
}
