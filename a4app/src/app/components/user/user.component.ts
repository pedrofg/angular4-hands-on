import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Posts[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    
  }

  ngOnInit() {
    this.name = 'John Doe';
    this.age = 20;
    this.email = 'doe@john.com';
    this.address = {
      street: '50 blabla',
      city:'boston',
      state:'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.hello = 'hello';

    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

  onClick() {
    this.name = 'Pedro Fernandes';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    console.log(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for(let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby) { 
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
    street:string,
    city:string,
    state:string
}

interface Posts {
    id:number,
    title:string,
    body:string,
    userId:number
}
