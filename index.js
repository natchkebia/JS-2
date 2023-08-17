
//? 1. შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function first (... numbersArray) {
    for(let i of numbersArray) {
        if(i > 0) {
            console.log(i); 
        }
    } 
}

let firstrezult = first(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)
console.log(firstrezult);




// ? 2. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

let secondFunction = (...numbersArray2) => {
    let sum = 0;
    for(let i of numbersArray2) {
        sum += i
    }
    return sum
}

let secondesult = secondFunction(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(secondesult);




//? 3. ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და gfalse თუ isloggedin ფროფერთი არის false;

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
}

let Name = () => {
    if(user.isloggedin) {
        return `${user.firstname} ${user.lastname}`
    } return false
}

let nameFunction = Name()
console.log(nameFunction);




// ? 4.შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

let maxNumber = (...number) => {
    let max = number[0]
    for(let i of number) {
        if(i > max) {
            max = i
        }
    } return max
}

let maxResult = maxNumber(10, 3, 67, 27, 93, 14)
console.log(maxResult);




// ? 5. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd;

let numberType = (number) => {
    if(number % 2 === 0) {
        return `${number} ლუწია`
    }
    return `${number} კენტია`
}
let typeResult = numberType(189)
console.log(typeResult);




// ? 6. მოცემულია მასივი:
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1,2,3,4,5];
let reverseArray = [];

for (let i = array.length -1; i >= 0; i--) {
    reverseArray.push(array[i])
}
console.log(reverseArray);



// ? 7. ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

let ageFunc = (birthYear,yearNow) => {
    let age = yearNow - birthYear
    let result = age > 18 ? 'სრულწლოვანია' : 'არასწულყლოვანია'
    return result
}

let ageResult = ageFunc(2000, 2023)
console.log(ageResult);



//? 8. მოცემულია მასივი
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i of array2) {
    if (i == 5) {
        console.log('არის');
        break
    }
}



// ? 9. მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)

let array5 = [1, 2, 3, 7, 6, 9];
    for(let i of array5) {
        if(i == 7) {
            continue
        }
    console.log(i);
}


