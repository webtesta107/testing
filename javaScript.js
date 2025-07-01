//constructor in javascript is use to create a blue print of object so we dont have to werite same object again and agian


//constructor function

function show(name,lastName,dob){
    this.name=name;
    this.lastName=lastName;
    this.dob=dob;
    this.fun=function showing(){
        console.log(`this is function${this.name}`)
    }
}

const obj1=new show('vibhu')

console.log(obj1)
console.log(obj1.__proto__)