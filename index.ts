type Person = {
    name: string ;
} ;


const person: Person = {

    name: "John",
}


console.log(person.name);

                            // #### Annotations ####


//strings

let myName: string = 'abir'

console.log(myName)

//numbers

let favNumber: number = 10 ;


console.log(favNumber)


//boolean

let tsHard: boolean = false;
tsHard = true; 
console.log(tsHard)



                               // *** Type Inference *** //

let tech = 'Typescript'

let newNumber = 8 ;

let tsNew = true ;

console.log(typeof tech)
console.log(typeof newNumber)
console.log(typeof tsNew)


                     //         *** Any Type **         //

let color: any = 'crimson' ;

color = 20;
color = true ;
//color();

console.log(color);

//color()
              
     //      *****   Regular function   **********          //


function addOne(num:number) {
      return num + 1
}


const res = addOne(3)

console.log(res);



