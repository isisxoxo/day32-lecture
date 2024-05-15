/* cd into model directory and use terminal to create class 
* ng g cl user
* ng g cl model/feedback
* */
export class User {
    lastname!: string // Alternative: lastname: string = "No last name"
    // firstname!: any // Any data type
    firstname!: string
    email!: string
    foods!: string[]

    constructor(lastname: string, firstname: string, email:string, foods:string[]) {
        this.lastname = lastname
        this.firstname = firstname
        this.email = email
        this.foods = foods
    }

}
