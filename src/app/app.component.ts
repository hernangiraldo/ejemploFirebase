import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tuitsObservable: Observable<any[]>;
  tuit: any = {
    user: '',
    tuit: ''
  };
  incompleteData: boolean = false;

  constructor (
    private db: AngularFireDatabase
  ) {}

  ngOnInit () {
    this.tuitsObservable = this.getTuits('/tuits');
  }

  getTuits (path) {
    return this.db.list( path ).valueChanges();
  }

  saveTuit() {
    if (this.tuit.user === '' && this.tuit.tuit === '') {
      this.incompleteData = true;
      return;
    }
    const items = this.db.list('tuits');
    items.push(this.tuit);
    this.tuit = {
      user: '',
      tuit: ''
    };
    this.incompleteData = false;
  }
}
