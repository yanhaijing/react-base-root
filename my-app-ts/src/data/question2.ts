enum QuestionType {
  t1 = 't1',
  t2 = 't2',
  t3 = 't3',
}

export interface Question {
  id: number;
  type: QuestionType;
}

export interface Question1 extends Question {
  t1?: string;
}
export interface Question2 extends Question {
  t2?: string;
}
export interface Question3 extends Question {
  t3?: string;
}

const q1 = {} as Question;

export interface Question1 {
  t1?: string;
}
export interface Question2 {
  t2?: string;
}
export interface Question3 {
  t3?: string;
}

export type Question0 = Question1 & Question2 & Question3;

const q2 = {} as Question0;
