enum QuestionType {
  t1 = 't1',
  t2 = 't2',
  t3 = 't3',
}

export interface Question {
  id: number;
  type: QuestionType;
  title: string;
  content: string;
}

export type NewQuestion = Partial<Question>;
