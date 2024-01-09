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


           //********** */ Arrow Func ************* //

        const  double = (x:number, y:number) => x * y
        const  product = double(2,10)
         
        console.log(product)


     // *************default params value *****************//
     
     
       function greet(person : string = "nobody"){
        return `Hello ${person}`
     }

    
     const Greet = greet();
     console.log(Greet);

          //         Return Annotations ( using Arrow functions)         //

      const double2 = (x:number) : number => x * x 

     const res2 = double2(2) ;

     console.log(res2)
   


     // Return annotations using Regular function


        function double1(x:number): number {
                return x * x
              }
      

        const result = double1(3) ;
        
        console.log(result);


      //          ****************** void in TypeScript ************** //


       
      function printMessage(message: string):void {
        console.log(`This is my ${message}`)
      
      }

      printMessage("message");

          
      //  *********** Never ************** //
      
      // a function that always throws an error
      // A function that has an infinite loop
      // A variable that can never have a value
         
    //   function throwError(msg: string): never {
    //     throw new Error(msg);
    //   }


    //   function infiniteLoop() : never {
    //     while (true) {}
    //   }

      
    //   function throwNewError(msg:string): never {
    //        throw new Error(msg)
    //   }
       
    //  let x: never


    //  function neverReturns(): never {
    //     while(true) {}
    //  }

       
    //  x = neverReturns()


     // *************  Arrays Types ************* //

     
     // 2 types of arrays    //

     //******* using the square bracket */
   
     const numbers: number[] = [1,2,3,4] ;


     const nums: number[] = [1,2,4,6] ;

     console.log(nums)


     const str: string[] = ["one", "two", "three"]

     console.log(str)

    // const items: string[] = [] ;

     const items2: string[] = []

     items2.push('Keyboard') ;
     

     console.log(items2)

     const numList: number[] = [] ;

     numList.push(20);
    //  numList.push(true);
     
     console.log(numList);


    // html //

    const items3: Array<number> = [1,2,4,5]

    console.log(items3)


    // **********multi dimensional array  //


    const matrix: number[][] = [
      [1,2],
      [3,4],

    ]


    const singleDi: number[] = [1,2,3,4,5]

    const multiDi: number[][] = [[1,2,3,4,5]]

    const tripleDi: number[][][] = [[[1,2,3,4,5]]]
       

    console.log(singleDi);
    console.log(multiDi);
    console.log(tripleDi);


    // ****************Objects *************//

    
    const person2 : {firstname: string; lastname: string; age: number} = {
      firstname: 'John',
      lastname: "doe",
      age: 30
    }


     console.log(`Name: ${person2.firstname} ${person2.lastname}, Age: ${person2.age}`)

      function printUser(): {name:string; age:number; location:string} {
           
            return {
              name: "HuXn",
              age: 20,
              location: "China"
            }
      }

    const res3 =  printUser();

    console.log(res3);

    //////////////////// ************* Type Aliases ***********************//


    type User =  {

         name:string;
         age: number;
         location:string;

    } ;



    const printUserInfo = (user: User) => {
      return  `Name: (${user.name}) Age: ${user.age}) Location: (${user.location})`
    }

    
   const res4 = printUserInfo({name: "Alex", age: 20, location: "USA"})

   console.log(res4);

            /////////////////******  optional Properties ******************///////////



   type User2 = {
    name:string;
    age?: number;
    readonly location: string,
     
   }


   const user: User2 = {

       name:"Salekin",
      //  age: 34,
       location: "Dhaka"

   }


  //  user.location = "Baridhara" ;

   console.log( `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`)
 
   

 ///////////////////////*******************intersection types*********** */ ////////////////////



 type UserInfo = {
  first:string;
  last: string;
  age:number
 }

 type AccountDetails = {

  email: string;
  password: string
 }


 type USer = UserInfo & AccountDetails


 const huxn: USer =  {
     
  first: "salekin",
  last: "Imran",
  age: 34,
  email: "abir045@gmail.com",
  password: "password12"

} ;

console.log(`Name: ${huxn.first} ${huxn.last} Age:${huxn.age} Email: ${huxn.email} password: ${huxn.password}`)



///////////////////////***********Union types *////////////////////////////

let password: string | number = 20

type UserInfoo = {
  first: string;
  last: string;
  age: number ;
}

type AccountDetails2 = {

    email: string;
    password: string;

}

let userOne: UserInfoo | AccountDetails = {

  first: "John",
  last: "Doe",
  age: 20

}


const items : (number | string)[] = [1,5,5, 'hello'] ;

console.log(items)


//*************************************Literal types************************ */

 
let colors: 'red' | 'crimson' | 'fusha'

colors = 'red'

console.log(colors)


let isTrue: true | false ;

isTrue = true ;

let passwordInfo: "secretpassword" | "secretpassword"

////////////////*********Tuples************** */////////////////
 
let myTuple: [number, string]

myTuple = [10, 'hello world'] ;

console.log(myTuple)

const products : (number | string) [] = ['item 1', 12]

console.log(products) ;

const games: [string, number, boolean] = ['Game1' , 12, true ] ;
console.log(games);



///////////////////////****************Enums */


enum WeatherConditions {

  Sunny = 'sunny' ,
  Cloudy = 'cloudy',
  Rainy  = 'rainy' ,
  snowy = 'snowy'
}

console.log(WeatherConditions)


const currentWeather = WeatherConditions.snowy;

console.log(`The current weather is ${currentWeather}`)


class Employee {
   name: string;
   age: number;

constructor(name: string, age: number) {
  this.name = name ;
  this.age = age ;
 }

}


const employeeOne = new Employee('John', 20);

console.log(employeeOne)


///////////////////******* Access Modifiers     ******************* */

//public
//private
// protected


 class Student {
        
   private first: string;
   public last: string;
   protected age: number;
 
    constructor(first:string, last: string, age: number){
       this.first = first;
       this.last = last;
       this.age = age;
             
       }

       getName(): string {
        return `${this.first} ${this.last} Age: ${this.age}`
       }
}


let p1 = new Student("John", "doe",20 )

class Abir extends Student {
    constructor(first:string, last: string, age: number) {
      super(first,last,age) 
    }
} 

const sln = new Abir('salekin', 'webdev', 20)


// console.log(p1.getName());
// console.log(p1.last);

console.log(sln)


////// ******** Getters & Setters ******************////////////////


class MyClass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty
  }

  set myProperty(value: number) {
    this._myProperty = value ;
  }
}

const myInstance = new MyClass()

console.log(`Current Value: ${myInstance.myProperty}`) ;

myInstance.myProperty = 10

console.log(`Current Value: ${myInstance.myProperty}`) ;


/////////////////************* Interface ************* */


interface Computer {
  name: String;
  ram:  number ;
  hdd:  number ;
}

const computerExample: Computer = {
  name: 'i7',
  ram: 8,
  hdd: 100

}

console.log(computerExample.name)
console.log(computerExample.ram)
console.log(computerExample.hdd)
 


interface Movie {
  readonly name:string;
   ratings: number;
   genre?: string
} 

const movie1: Movie = {
  name: "Star Wars",
  ratings: 8.9,
  genre: "action"

}

console.log(movie1)

 ////////////////////// **************** interfaces in functions *********** ////

interface MathOperation {
  (x:number, y: number) : number
}

const add: MathOperation =  (a,b) => a+b
const subtract: MathOperation = (a,b) => a-b
console.log(add(2,3))
console.log(subtract(10,8))


interface PersonOfInterest {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void
}

function greetings(person: PersonOfInterest) {

console.log(`Hello , ${person.firstName} ${person.lastName}`)
person.sayHello() ;

}

const john: PersonOfInterest = {
   firstName: 'John',
   lastName: 'Doe',
   age: 30,
   sayHello() {
    console.log('Hi There')
   }
} ;

const Salekin: PersonOfInterest = {
  firstName: 'Salekin',
  lastName: 'Imran',
  age: 35,
  sayHello() {
   console.log('How is it going')
  }
 } ;


 greetings(john);
 greetings(Salekin)

interface Song {
  songName: string;
  singerName: string;
  printSongInfo(songName: string, singerName: string) : string
}



const song1: Song  = {

songName: 'Natural',
singerName: "imagin Dragon",
printSongInfo: (songName, singerName)  => {
  return `Song: ${songName}, Singer: ${singerName}`
 }

}

console.log(song1.printSongInfo('Numb', 'Linkin Park'))


interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number ;
}

interface MovieGenre extends MovieDetails {
  genre: string
}


const movie2: MovieGenre = {
  name: 'John Wick',
  genre: 'Action',
  ratings: 8.9,
  printMovieInfo(name:string, price:number, ratings: number): string | number {
            return `Movie name: ${name} Price: ${price} Ratings: ${ratings}` ;
   }
} ;

const response = movie2.printMovieInfo('rebel moon', 100, 8)

console.log(response)


 /// ************ interfaces with classes *********** //////


 interface Vehicle {

   start(): void;
   stop(): void;

 }


class Car  implements Vehicle {
  start(): void {
    console.log('car is starting')
  }

  stop(): void {
    console.log('car is stopped')
  }

}

const myCar = new Car();
myCar.start() ;
myCar.stop() ;


// interface merging


interface Car {
  brand: string;
  start(): void ;
}

interface Car {
  model: string;
  stop(): void ;  
}

const myRide: Car = {
  brand: 'BMW',
  start(){
    console.log('start')
  },
  stop(){
    console.log('Stop')
  },
  model: 'M3'
}

myRide.start();
myRide.stop();
console.log(myRide.model);



///////////////////////************ Generics        ///    */


const printString = (x: string ) => console.log(x)

console.log(printString('hello'));


function printNumber(item: number, defaultValue: number): [number, number] {

  return [item, defaultValue];
}

function printOnlyString(item: string, defaultValue: string): [string, string] {

  return [item, defaultValue];
}

function printBoolean(item: boolean, defaultValue: boolean): [boolean, boolean] {

  return [item, defaultValue];
}

const num =  printNumber(1,2) ;
const STR = printOnlyString('hello', 'world') 
const bool = printBoolean(true, false)

console.log(num)
console.log(str)
console.log(bool)


 function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T,T] {
    return  [item, defaultValue]

 }


 const resultUDTF =  uniqueDataTypesFunc<number>(10,20)
 const resultStr = uniqueDataTypesFunc<string>('Hello','Salekin')
 
 console.log(resultUDTF)
 console.log(resultStr)
 

interface Dog {
  name:string;
  breed:string
}

const dog1 = uniqueDataTypesFunc<Dog>({name: 'Buddy', breed: 'Labrador'}, {name: "Dafult", breed: "unknown"})

console.log(dog1);

function getRandomKeyValuePair<T>(obj: {[key : string]: T } ): { key: string; value: T;} {

const keys = Object.keys(obj);
const randKey = keys[Math.floor(Math.random() * keys.length)]

return {key:randKey, value:obj[randKey]}

}

const stringObject = { a:'apple', b:'banana', c:'cherry' }
const res5 = getRandomKeyValuePair<string>(stringObject)

console.log(res5)

const numberObject = { one:1, two:2, three:3 }
const numResult = getRandomKeyValuePair<number>(numberObject)

console.log(numResult)


function filterArray<T>(array:T[], condition: (item: T) => boolean): T[] {
  return array.filter((item)=> condition(item))
}


const numberArray = [1,2,3,4,5,6,7,8,9,10]

const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0)
console.log(evenNumbers)










































































     



















     



      











      





      
       

        














