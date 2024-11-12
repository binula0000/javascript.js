/* 0den 10ga deiingi sandardy tizip shygu */
/* for(let i =0; i <=10; i++){
    console.log("i-din mani = " +i);   
}
 *///  let num = +prompt("san engiz")
/* jup sandar men taq sandar tizip  shygu */

/* for(let i=0; i<num; i++)
    if(i % 2 == 0){
         console.log(i + "-jup");   
    }
     else{
         console.log(i+ "-taq");
    } */

         /* tek taq san */
/* let num = + prompt("san engiz")
          for(let i=0; i<=num; i++)
    if(i % 2 == 1){
         console.log(i + "-taq");   
    } */

        //  break

/*         for(let i=1; i<=10; i++){
            if(i==5){
                break;
            }
            console.log(i);
             }
 */
        // continue
/*              for(let i=10; i>=0; i--){
                if(i==5 || i==4 || i==2){
                    continue;
                }
                console.log(i);
                 } */

/* let num = +prompt("san engiz")
let sum=0;
for(let i=1; i<=50; i++){
    sum+=i;
    console.log("sumnin mani->" +sum);
    
}
alert("sum bizde"  +sum) */

// Пайдаланушыдан сан сұраймыз
let num = prompt("Сан енгізіңіз:");


for (let i = 1; i <= num; i++) {
    // Егер сан 3-ке және 5-ке қалдықсыз бөлінсе
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
        // Егер бұл сан жұп болса, циклды тоқтатамыз
        if (i % 2 === 0) {
            break;
        }
    }
}
