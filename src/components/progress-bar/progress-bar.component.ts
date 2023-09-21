import { Component, Input, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit{


  @Input() events:any;

  isProgress = false;
  loadingPercent = 0;
  intervalId = {} as any;
  progressToggle:boolean = true;

  constructor(public snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.events.subscribe(() => this.startLoading());
  }

  startLoading() {
    // this.loadingPercent = 0; // setting install value
    this.isProgress = true;
    this.intervalId = setInterval(() => {
      if (this.loadingPercent < 100) {
        this.loadingPercent += 1;
      }
    }, 100);
  }

  progressInLoading() {
    if (this.loadingPercent === 100) {
      clearInterval(this.intervalId);
      this.isProgress = false;
      this.snackBar.open('Migration applied successfully','Success',
      {
        duration:1000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
      })
    }
  }

}
