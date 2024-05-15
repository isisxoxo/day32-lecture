import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrl: './user-skills.component.css'
})
export class UserSkillsComponent implements OnInit {

  skillForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
      name: '',
      skills: this.formBuilder.array([])
    })
  }

  onSubmit() {
    console.log(this.skillForm.value)
  }

  getSkills() : FormArray {
    return this.skillForm.get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return this.formBuilder.group({
      skills: '',
      experience: ''
    })
  }

  addSkill() {
    this.getSkills().push(this.newSkill)
  }

}
