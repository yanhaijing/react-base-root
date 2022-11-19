import { FC } from 'react';

interface Demo1Props {
  a: string;
}

export function Demo11(props: Demo1Props) {
  return <div>{props.a}</div>;
}

export const Demo12: FC<Demo1Props> = (props) => {
  return <div>{props.a}</div>;
};
