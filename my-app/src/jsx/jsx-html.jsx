import React from 'react';

export function JsxHtml() {
  const [count, setcount] = React.useState(0);
  return (
    <div>
      <div>
        count:
        <span id="count">{count}</span>
      </div>
      <button onClick={() => setcount(count + 1)}>点击+1</button>
    </div>
  );
}
