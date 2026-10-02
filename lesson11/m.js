function a(s){
  let res={}
  for(i in s){
    let word=s[i]
    if(res[word]){
      result[word] += 1;

    }
    else {
            result[word] = 1;
        }
  }

    return result;
}
console.log(a(["apple", "grape", "apple", "apple"]));