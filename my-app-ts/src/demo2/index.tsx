import { FC, ReactNode } from 'react';

interface Demo1Props {
  a: string;
  title: ReactNode;
}

export const Demo2: FC<Demo1Props> = (props) => {
  return <div>{props.title}</div>;
};
