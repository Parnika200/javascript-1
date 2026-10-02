function fun(a) {
   
  let  count=0
    for (let i in a) {
        if(a[i]>0){
            count+=1
        }
       
    }
  return count
  
}

console.log(fun([1, 1, 1]));