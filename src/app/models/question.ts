export interface Answer {
  id: number;
  text: string;
  x: number;
  y: number;
}

export interface Question {
  id: number;
  page: number;
  section: string;
  text: string;
  
  weight: number;

  answers: Answer[];
}
