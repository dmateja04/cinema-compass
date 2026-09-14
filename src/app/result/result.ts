import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();

    const state = navigation?.extras.state as {
      x?: number;
      y?: number;
    };

    if (state) {
      this.x = state.x ?? 0;
      this.y = state.y ?? 0;
    }
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
}
