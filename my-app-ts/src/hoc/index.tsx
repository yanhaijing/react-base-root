import { FC } from 'react';

interface HOCProps {
  loading: boolean;
}
const loadingHOC = <P extends object>(
  Cmpt: React.ComponentType<P>
): FC<P & HOCProps> => {
  return (props: P & HOCProps) => {
    const { loading, ...restProps } = props;
    return loading ? <>'loading'</> : <Cmpt {...(restProps as P)} />;
  };
};

const Hello: FC<{ name: string }> = (props) => {
  return <div>hello {props.name}</div>;
};

export const LoadingHello = loadingHOC(Hello);
