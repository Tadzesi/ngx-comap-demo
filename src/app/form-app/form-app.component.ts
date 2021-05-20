import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { FormAppService } from './form-app.service';
import { ClientMessage } from './clientMessage.model';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.scss']
})
export class FormAppComponent implements OnInit, AfterViewChecked  {
  @ViewChild('messageArea') private messageContainer: ElementRef;

  public data: ClientMessage[];
  public messageText: string = '';

  constructor(private formAppService: FormAppService) {

  }

  ngOnInit(): void {
    this.getAllClientMessages();
  }

  getAllClientMessages() {
    this.formAppService.getAllMessages().subscribe(
      resp => {
        this.data = resp;
      },
      error => {
        //todo: catch error, or HttpInterceptor      
      }
    );
  }

  public sendClientMessage() {
    console.log(this.messageText);
    this.formAppService.sendClientMessages(this.messageText).subscribe(
      resp => {
        this.data.push(resp);
        this.messageText = '';
        this.scroolDivToBootom();
      },
      error => {
        //todo: catch error, or HttpInterceptor
      }
    );
  }

  ngAfterViewChecked() {        
    this.scroolDivToBootom();        
} 

  private scroolDivToBootom(): void{
    try {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
  } catch(err) { }        
  }
}
