import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userID;
  userData;
  constructor(private activatedRoute : ActivatedRoute,private dataService : DataService) { 
    this.userID = {"id":this.activatedRoute.snapshot.paramMap.get('id')}
    console.log(this.userID);
    
      this.dataService.UserData(this.activatedRoute.snapshot.paramMap.get('id')).subscribe((mydata : any[])=>{
        this.userData = mydata['msg'][0]
        console.log(this.userData);
      });
        
        
        
    
  }

  ngOnInit(): void {
  }
  copyID(item){
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }
}
