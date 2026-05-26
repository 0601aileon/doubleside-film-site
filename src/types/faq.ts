export interface FAQ {
  id: number;
  category: 'product' | 'ordering' | 'technical' | 'company';
  question: string;
  questionZh?: string;
  answer: string;
  answerZh?: string;
}
