// module.exports = function toReadable (number) {
//     //Human Numbers
//     let simpleNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     let teensNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//     let dozensNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
//     let hundreds = 'hundred';
//
//     let i = 0;
//
//     let humanNum = '';
//
//     let a = '';
//     let aTempNum = 0;
//     let bTempNum = 0;
//     let b = '';
//     let ba = '';
//     let c = '';
//
//     if(number === 0) {
//     return humanNum = simpleNumbers[0];
//     }
//     while(number !== 0) {
//     debugger;
//       let n = number % 10;
//       if(i === 0) {
//           aTempNum = n;
//           a = a + simpleNumbers[n];
//       } else if(i === 1) {
//           bTempNum = n;
//           if(n === 1) {
//             ba = ba + teensNumbers[aTempNum];
//         } else if(aTempNum === 0 && n !==0) {
//             ba = ba + dozensNumbers[n-2];
//         } else if(n === 0) {
//             b = b;
//         }
//         else {
//             b = b + dozensNumbers[n-2];
//         }
//       } else if(i === 2) {
//           c = simpleNumbers[n] + ' ' + hundreds;
//       }
//
//       number = (number - n)/10;
//       i+=1;
//     }
//
//     if(ba){
//       return humanNum = c ? c + ' ' + ba : ba;
//     } else {
//
//       if(c) {
//
//           if(aTempNum === 0 && bTempNum === 0) {
//             return humanNum = c;
//         } else {
//               return humanNum = b ?  c + ' ' + b + ' ' + a : c + ' ' + b + a;
//         }
//       } else if(b) {
//           return humanNum = b + ' ' + a;
//       }  else {
//           return humanNum = a;
//       }
//     }
//   }
//

module.exports = function toReadable (number) {
  let one_Nineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = [];
  let hundredCount = number / 100 >= 1 ? Math.floor(number / 100) : 0;
  if (hundredCount !== 0) {
    result.push(one_Nineteen[hundredCount]);
    result.push('hundred');
    if(Number.isInteger(number / 100)) {
      return result.join(' ').trim();
    }
  }
  let tensCount = number - hundredCount * 100;
  if (tensCount < 20) {
    result.push(one_Nineteen[tensCount]);
  } else {
    let tensNum = tensCount / 10;
    if(Number.isInteger(tensNum)) {
      result.push(tens[tensNum - 2]);
    } else {
      tensNum = Math.floor(tensNum);
      let unitNum = tensCount - tensNum * 10;
      result.push(tens[tensNum - 2]);
      result.push(one_Nineteen[unitNum]);
    }
  }
  return result.join(' ').trim();
};
  