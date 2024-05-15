import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { nonWhiteSpace } from '../custom-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  userForm!: FormGroup;

  foodArray!: FormArray;

  user: User = new User('','','',[]);

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.foodArray = this.formBuilder.array([])

    this.userForm = this.formBuilder.group({
      firstname: this.formBuilder.control<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      lastname: this.formBuilder.control<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      email: this.formBuilder.control<string>('', [Validators.required, Validators.email, nonWhiteSpace]),
      foods: this.foodArray
    })
  }

  processUserForm() {
    const userInfo = this.userForm.value
    console.log(">>>>> User first name: ", userInfo.firstname)
    console.log(">>>>> User last name: ", userInfo.lastname)
    console.log(">>>>> User email: ", userInfo.email)
    console.log(">>>>> User foods: ", userInfo.foods)
    for (var food of userInfo.foods) {
      console.log(">>>>> User food: ", food.f1)
    }
    
  }

  addNewFood() {
    const foodItem = this.formBuilder.group({
      f1: this.formBuilder.control<string>('')
    })
    
    this.foodArray.push(foodItem)
  }
  
  deleteFood(idx: number) {
    if (this.foodArray.length != 1) { //Cannot delete if only have 1 food item
      this.foodArray.removeAt(idx)
    }
  }
}