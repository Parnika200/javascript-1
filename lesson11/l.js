function fun(arr){
  let max=arr[0]
  for(let i in arr){
    if(arr[i]>max){
        max=arr[i]
    }
  }
  return max
}

fun([1,3,4])