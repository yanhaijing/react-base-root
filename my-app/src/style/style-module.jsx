import React from 'react';

import styles from './style.module.css';

function Cmpt1() {
  return <div className={styles.yan}>123</div>;
}

function Cmpt2() {
  return (
    <div style={{ border: '1px solid red', margin: 10, width: 200 }}></div>
  );
}

function Cmpt3() {
  return <div className=".wgt-cmp3-wp"></div>;
}

export function StyleModule() {
  return (
    <div>
      <Cmpt1></Cmpt1>
      <Cmpt2></Cmpt2>
      <Cmpt3></Cmpt3>
    </div>
  );
}
