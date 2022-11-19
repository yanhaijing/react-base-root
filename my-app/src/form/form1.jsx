import React from 'react';

function Form11() {
  const [name, setname] = React.useState('');
  return (
    <form>
      <div className="form-item">
        <label htmlFor="">name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </div>
    </form>
  );
}

function Form12() {
  const name = React.useRef(null);

  return (
    <form>
      <div className="form-item">
        <label htmlFor="">name:</label>
        <input type="text" ref={name} />
      </div>
    </form>
  );
}

function Form13() {
  const [name, setname] = React.useState({ val: '', validate: true });

  return (
    <form onSubmit={() => {}}>
      <div className="form-item">
        <label htmlFor="">name:</label>
        <input
          type="text"
          value={name.val}
          onChange={(e) => {
            setname({
              val: e.target.value,
              validate: /^[a]{3}$/.test(String(e.target.value)),
            });
          }}
        />
        {!name.validate ? <div style={{ color: 'red' }}>请输出3个a</div> : null}
      </div>
      <input type="submit" />
    </form>
  );
}

export function Form1() {
  return (
    <div>
      <div style={{ margin: 10 }}>
        <div>Form11</div>
        <Form11></Form11>
      </div>
      <div style={{ margin: 10 }}>
        <div>Form11</div>
        <Form12></Form12>
      </div>
      <div style={{ margin: 10 }}>
        <div>Form11</div>
        <Form13></Form13>
      </div>
    </div>
  );
}
