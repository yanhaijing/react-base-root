import React from 'react';

function Base1() {
  const name1 = 'yan';
  const name2 = 'hai';
  const name3 = 'jing';

  return (
    <div>
      <div>{name1}</div>
      <div>
        {name1}
        {name2}
        {name3}
      </div>
    </div>
  );
}

function Base2() {
  const name = 'yan';
  const title = 'yanhaijing';
  return (
    <div>
      <div title={title}>{name}</div>
    </div>
  );
}

function Base3() {
  const flag = !!Math.floor(Math.random() * 10) % 2;

  const name1 = 'yan1';
  const name2 = 'yan2';
  return <div>{flag ? name1 : name2}</div>;
}

function Base4() {
  const flag = !!Math.floor(Math.random() * 10) % 2;

  const name1 = 'yan1';
  const name2 = 'yan2';
  return <div>{flag ? <div>{name1}</div> : <div>{name2}</div>}</div>;
}

function Base5() {
  const list = ['yan1', 'yan2', 'yan3', 'yan4', 'yan5'];
  return (
    <ul>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Base6() {
  const [value, setvalue] = React.useState(1);
  return (
    <div>
      <div>value: {value}</div>
      <button onClick={() => setvalue(value + 1)}>++++</button>
    </div>
  );
}

export function JsxBase() {
  return (
    <div>
      image.png
      <Base1></Base1>
      <Base2></Base2>
      <Base3></Base3>
      <Base4></Base4>
      <Base5></Base5>
      <Base6></Base6>
    </div>
  );
}
