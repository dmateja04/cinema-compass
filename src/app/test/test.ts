import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { QUESTIONS } from '../data/questions';
import { Question } from '../models/question';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {

  questions: Question[] = QUESTIONS;

  currentPage = 1;
  totalPages = 5;

  // key = question id
  // value = answer id
  selectedAnswers: { [questionId: number]: number } = {};

  constructor(private router: Router) {}

  get currentQuestions(): Question[] {
    return this.questions.filter(q => q.page === this.currentPage);
  }

  selectAnswer(questionId: number, answerId: number): void {
    this.selectedAnswers[questionId] = answerId;
  }

  isSelected(questionId: number, answerId: number): boolean {
    return this.selectedAnswers[questionId] === answerId;
  }

  isCurrentPageComplete(): boolean {
    return this.currentQuestions.every(
      question => this.selectedAnswers[question.id] !== undefined
    );
  }

  nextPage(): void {
    if (!this.isCurrentPageComplete()) {
      return;
    }

    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      window.scrollTo(0, 0);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      window.scrollTo(0, 0);
    }
  }

  finishTest(): void {
    if (!this.isCurrentPageComplete()) {
      return;
    }

    let totalX = 0;
    let totalY = 0;

    for (const question of this.questions) {

      const selectedAnswerId =
        this.selectedAnswers[question.id];

      const selectedAnswer =
        question.answers.find(
          answer => answer.id === selectedAnswerId
        );

      if (selectedAnswer) {
        totalX += selectedAnswer.x;
        totalY += selectedAnswer.y;
      }
    }

    console.log('X:', totalX);
    console.log('Y:', totalY);

    this.router.navigate(['/result'], {
      state: {
        x: totalX,
        y: totalY
      }
    });
  }
}