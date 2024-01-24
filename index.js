// // console.log("abc");
// function bankaccount(name,bank,blance){
//     let costumer={
//     }
//     costumer.name=name;
//     costumer.bank=bank;
//     costumer.blanc=blance;
//     costumer.addmoney=function(am){
//         costumer.blanc+=am;
        
//     }
//     return costumer;
// }
// let costumer1=bankaccount("umer","statebank",1000)
// costumer1.addmoney(1000);
// console.log(costumer1.blanc);
// ****using Genrator function ie Object.create;*****//

function bankaccount(name,bank,blance){
    let costumer=Object.create({addMoney:function(amount){
        costumer.blanc+=amount;
    }},)
    costumer.name=name;
    costumer.bank=bank;
    costumer.blanc=blance;
    
    return costumer;

}
let costumer1=bankaccount("shafiya","jammuandkashmirbank",1000)
costumer1.addMoney(1400)
console.log(costumer1.blanc);

