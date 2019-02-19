import {DialogService} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';
import {Prompt} from './display-review';

@inject(DialogService)

export class App {
   constructor(dialogService) {
      this.dialogService = dialogService;
   }
   openModal() {
      this.dialogService.open( {viewModel: Prompt, model: 'Are you sure?' }).then(response => {
         console.log(response);
			
         if (!response.wasCancelled) {
            console.log('OK');
         } else {
            console.log('cancelled');
         }
         console.log(response.output);
      });
   }
   ratings = [
      {id:0, name:'1'},
      {id:1, name:'2'},
      {id:2, name:'3'},
      {id:3, name:'4'},
      {id:4, name:'5'}
  ];

  genres = ['Comedy', 'Action', 'Thriller', 'Horror', 'Fantasy'];
};