import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.html',
  styleUrl: './result.css'
})
export class Result {
  x = 0;
  y = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      const xParam = Number(params['x']);
      const yParam = Number(params['y']);

      this.x = Number.isFinite(xParam) ? xParam : 0;
      this.y = Number.isFinite(yParam) ? yParam : 0;
    });
  }

  get xDescription(): string {
    const percentage = Math.abs(this.x * 100).toFixed(0);

    if (this.x >= 0) {
      return `${percentage}% Fantastic`;
    }

    return `${percentage}% Realistic`;
  }

  get yDescription(): string {
    const percentage = Math.abs(this.y * 100).toFixed(0);

    if (this.y >= 0) {
      return `${percentage}% Classic`;
    }

    return `${percentage}% Modern`;
  }

  get pointLeft(): number {
    return ((this.x + 1) / 2) * 100;
  }

  get pointTop(): number {
    return (1 - ((this.y + 1) / 2)) * 100;
  }

  restartTest(): void {
    this.router.navigate(['/test']);
  }

  copyLink(): void {
    navigator.clipboard.writeText(window.location.href);
  }
}