//
// export const change = (amount) =>{
//   if(isNaN(amount)){
//     return;
//   }if (amount = 0){
//     return amount;
//   }else{
//     return change(Math.ceil(amount)-amount);
//
//   }
// }
export class Amount{
  //determines change needed for total
  pennyCounter(cash){
    if(cash <1 && cash >=0){
      return cash;
    }

  }
}
