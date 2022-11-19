import PropTypes from 'prop-types';

function Cmpt1(props) {
  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>卡片</div>
      <div>{props.name}</div>
    </div>
  );
}

function Cmpt2(props) {
  const Cmpt = props.Cmpt;
  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{props.name}</div>
      <div>{props.nameEle}</div>
      <div>{props.nameFn()}</div>
      <div>{<Cmpt></Cmpt>}</div>
    </div>
  );
}

function Cmpt3(props) {
  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{props.name}</div>
    </div>
  );
}
Cmpt3.defaultProps = {
  name: '未知用户',
};

function Cmpt4(props) {
  const name = String(props.name);
  return (
    <div style={{ border: '1px solid red', margin: 10 }}>
      <div>{name.toUpperCase()}</div>
    </div>
  );
}
Cmpt4.propTypes = {
  name: PropTypes.string,
};

function Cmpt5(props) {
  const name = String(props.name);
  return (
    <div
      style={{ border: '1px solid red', margin: 10 }}
      onClick={() => {
        props.name = 'hai';
      }}
    >
      <div>{name}</div>
    </div>
  );
}

function cloneDeep(data) {
  return JSON.parse(JSON.stringify(data));
}

function Cmpt6(props) {
  return (
    <div
      style={{ border: '1px solid red', margin: 10 }}
      onClick={() => {
        const newData = { ...props.data, name: 'yannew' };
      }}
    >
      点我
    </div>
  );
}

function Cmpt7(props) {
  return (
    <div
      style={{ border: '1px solid red', margin: 10 }}
      onClick={() => {
        const newData = cloneDeep(props.data);
        newData.a.b = 1;
      }}
    >
      点我
    </div>
  );
}

function Cmpt8(props) {
  return (
    <div style={{ border: '1px solid red', margin: 10 }}>{props.children}</div>
  );
}

export function CmptProps() {
  return (
    <div>
      <Cmpt1 name={'yan1'}></Cmpt1>

      <Cmpt2
        name={'yan1'}
        nameFn={() => <b>yan3</b>}
        nameEle={<Cmpt1 />}
        Cmpt={Cmpt1}
      ></Cmpt2>

      <Cmpt3 name={'yan1'}></Cmpt3>
      <Cmpt3></Cmpt3>

      <Cmpt4 name={123}></Cmpt4>
      <Cmpt5></Cmpt5>
      <Cmpt6></Cmpt6>
      <Cmpt7></Cmpt7>
      <Cmpt8>
        <div>我是children</div>
      </Cmpt8>
    </div>
  );
}
