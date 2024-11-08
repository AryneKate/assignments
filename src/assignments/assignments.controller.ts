import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

// Assignment 1: Fibonacci Sequence Generator 
@Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string) {
    const num = parseInt(n, 10);
    if (isNaN(num) || num <= 0) {
      return { error: 'Please provide a positive integer.' };
    }
    
    const sequence = this.generateFibonacci(num);
    return { sequence };
  }

  private generateFibonacci(n: number): number[] {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n); // Return up to 'n' terms
  }
  // Assignment 2: Prime Number Checker
  @Get('prime/:number')
  isPrime(@Param('number') number: string) {
    const num = parseInt(number, 10);
    if (isNaN(num) || num <= 1) {
      return { isPrime: false };
    }

    const isPrime = this.checkPrime(num);
    return { isPrime };
  }

  private checkPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}