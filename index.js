let myArr = ["ford", "Hyundai",  "Tesla", "Toyota", "MG", "Tesla"]

//check if Tesla is in myArray

const checkMyArr = () => {

    let thereIsTesla = False;

    myArr.forEach((element) => {
        if(element === "Tesla" ) {
            thereIsTesla = true;
            count++
        }
    })
    checkMyArr();

    console.log(thereIsTesla);
    return thereIsTesla
}

//Be able to call this from outside of the fucntion
// it can be a return value or returned thisn 
// return.vale = truereturn.value = false;
// let thereIsTestle = CheckMyArr()
//need to call function
//  checkEveryCompany(company, array) => {

//}

//Can you call it outside of the function name(params) {
    
// }