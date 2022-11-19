import { FC } from 'react';

interface ParentProps {
  a: string;
}

export const Parent: FC<ParentProps> = (props) => {
  return <div>{props.a}</div>;
};

type ChildProps = {
  b: string;
} & ParentProps;

export const Child: FC<ChildProps> = (props) => {
  const { b, ...restProps } = props;

  return (
    <div>
      {b}
      <Parent {...restProps}></Parent>
    </div>
  );
};
