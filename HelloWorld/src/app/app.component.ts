import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com";
  username: String="";
  nameError: String="";

  ngOnInit():void{
    this.title = "Hello From BridgeLabz."
  }
  onClick($event:Event){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
  onInput($event:any){
    console.log("change Event Occurred!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if(nameRegex.test(this.username.toString())){
      this.nameError="";
      return;
    }
    this.nameError="Name is Incorrect!";
  }
}
