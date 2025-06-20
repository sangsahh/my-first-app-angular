import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
  styles : [`
    .white{
      color : white;
    }

    .content5
    {
      color : white;
    }
    `
  ]
})
export class App {
  protected title = 'my-first-app';

  showSecret = false;
  logs = [];
  logItem = 0;
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());

  }





  contentCreated = false;

  contents = [];

  index = 0;


  onContent(){
    this.contentCreated = true;
    this.index++;
    this.contents.push(this.index);
  }

  getColor(content) {
    return content > 4 ? 'blue' : '';
  }

  getClass(content){
    return content > 4 ? 'white' : '';
  }
}
