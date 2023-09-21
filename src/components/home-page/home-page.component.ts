import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  dataMigrationSubject: Subject<void> = new Subject<void>();

  public startDataMigration(){
    this.dataMigrationSubject.next();
  }

}
