import React, { lazy } from 'react';

export function loadable(factory) {
  const Cmpt = lazy(() => factory().then((v) => ({ default: v })));
  return function LazyCmpt() {
    return (
      <React.Suspense
        fallback={
          <div style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
            加载中...
          </div>
        }
      >
        <Cmpt />
      </React.Suspense>
    );
  };
}
