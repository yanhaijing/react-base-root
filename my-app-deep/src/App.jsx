import React from 'react';

export function App1() {
  const buttonRef = React.useRef(null);
  const [count, setcount] = React.useState(0);

  const [_isPending, startTransition] = React.useTransition();

  React.useEffect(() => {
    const button = buttonRef.current;
    setTimeout(() => {
      startTransition(() => {
        // 本次更新是并发更新
        setcount(1);
      });
    }, 1000);

    setTimeout(() => {
      button.click();
    }, 1040);
  }, []);

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={() => {
          setcount((curcount) => curcount + 2);
        }}
      >
        点击
      </button>

      <div>
        {[...Array(10000)].map((_, index) => (
          <span key={index}>{count}</span>
        ))}
      </div>
    </div>
  );
}

export function App2() {
  const buttonRef = React.useRef(null);
  const [count, setcount] = React.useState(0);

  React.useEffect(() => {
    const button = buttonRef.current;
    setTimeout(() => {
      setcount(1);
    }, 1000);

    setTimeout(() => {
      button.click();
    }, 1040);
  }, []);

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={() => {
          setcount((curcount) => curcount + 2);
        }}
      >
        点击
      </button>

      <div>
        {[...Array(10000)].map((_, index) => (
          <span key={index}>{count}</span>
        ))}
      </div>
    </div>
  );
}
