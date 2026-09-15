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

  private erf(x: number): number {
    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);

    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;

    const t = 1 / (1 + p * x);

    const y =
      1 -
      (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) *
        t *
        Math.exp(-x * x));

    return sign * y;
  }

  private normalCDF(
    x: number,
    mean = 0,
    stdDev = 0.3
  ): number {
    return 0.5 * (
      1 + this.erf(
        (x - mean) / (stdDev * Math.sqrt(2))
      )
    );
  }

  private uniformize(value: number): number {
    const lower = this.normalCDF(-1);
    const upper = this.normalCDF(1);

    const transformed =
      2 * (
        (this.normalCDF(value) - lower) /
        (upper - lower)
      ) - 1;

    // Excel: 40% raw + 60% transformed
    return 0.4 * value + 0.6 * transformed;
  }

  private clamp(value: number): number {
    return Math.max(-1, Math.min(1, value));
  }

  finishTest(): void {

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

    const answeredCount = Object.keys(this.selectedAnswers).length;
    const totalQuestions = this.questions.length;

    if (answeredCount > 0) {
      totalX *= totalQuestions / answeredCount;
      totalY *= totalQuestions / answeredCount;
    }

  const finalX = this.clamp(this.uniformize(totalX));
  const finalY = this.clamp(this.uniformize(totalY));
      
  console.log('Raw X:', totalX);
    console.log('Raw Y:', totalY);

    console.log('Final X:', finalX);
    console.log('Final Y:', finalY);

    this.router.navigate(['/result'], {
      queryParams: {
        x: finalX.toFixed(5),
        y: finalY.toFixed(5)
      }
    });
  }
}