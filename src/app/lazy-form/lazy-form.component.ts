import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lazy-form',
  templateUrl: './lazy-form.component.html',
  styleUrls: ['./lazy-form.component.css'],
  standalone: true,
    imports: [FormsModule, CommonModule],
  
})
export class LazyFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('loaded')
  }

  callStack: string[] = [];
  microtaskQueue: string[] = [];
  taskQueue: string[] = [];

  async runSimulation() {
    this.reset();

    // Step 1: Synchronous code
    this.pushToCallStack('console.log("A")');
    await this.delay(800);
    this.popFromCallStack();

    // Step 2: setTimeout
    this.taskQueue.push('setTimeout → B');
    // Step 3: Promise
    this.microtaskQueue.push('Promise → C');

    // Step 4: Synchronous continues
    this.pushToCallStack('console.log("D")');
    await this.delay(800);
    this.popFromCallStack();

    // Step 5: Run all microtasks
    while (this.microtaskQueue.length > 0) {
      const task = this.microtaskQueue.shift();
      this.pushToCallStack(task!);
      await this.delay(800);
      this.popFromCallStack();
    }

    // Step 6: Run one task from task queue
    if (this.taskQueue.length > 0) {
      const task = this.taskQueue.shift();
      this.pushToCallStack(task!);
      await this.delay(800);
      this.popFromCallStack();
    }
  }

  pushToCallStack(task: string) {
    this.callStack.push(task);
  }

  popFromCallStack() {
    this.callStack.pop();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  reset() {
    this.callStack = [];
    this.microtaskQueue = [];
    this.taskQueue = [];
  }

}
