const loadingHOC = (Cmpt) => {
  return (props) => {
    const { loading, ...restProps } = props;
    return loading ? <>'loading'</> : <Cmpt {...restProps} />;
  };
};

const Hello = (props) => {
  return <div>hello {props.name}</div>;
};

export const LoadingHello = loadingHOC(Hello);
