import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent {
  entryForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService:ApiService){
    this.entryForm = this.fb.group({
      title:['', Validators.required],
      body: ['', Validators.required],
      createdOn:[Date.now()],
      updatedOn: [Date.now()]
    });
  }
  submitNewEntry() {
    if(this.entryForm.valid){
      const formData = this.entryForm.value;

      console.log(formData);

      
    }
  }


}
