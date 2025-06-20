import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  standalone: false,
  // template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.html',
  styleUrl: './servers.css'
})
export class Servers implements OnInit {

  allowNewServer = false;

  serverCreationStatus = 'No server was created!';

  serverName = 'Testserver';

  serverCreated = false;

  servers = ['Testserver', 'Testserver 2'];

  constructor() {
       setTimeout(() => {
        this.allowNewServer = true;
       } ,2000);

  }

  ngOnInit(): void {
    
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;  
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
