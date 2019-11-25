//
// export const change = (cash) =>{
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
    if(cash <.05 && cash >=0){
      return cash;
    }
  }
  nickleCounter(cash){
    if(cash >=.05 && cash <.1){
      return cash = 1;
    }
  }
  // dimeCounter(cash){
  //   if(cash >=.10 && cash <1){
  //     return cash = 1;
  //   }
  // }

}
  //for every .25 return 1
  export const quarterCounter = (cash) =>{

    if(isNaN(cash)){
      return;
    }if (cash < .25){
      return cash;
    }else{
      return Math.floor((cash /.25));
    }
  }
