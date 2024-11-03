function happyCoding(nickname){
    let value = 0 
    switch(nickname.toLowerCase()){
        case "happy coding":
            value = 1
            break
        case "coding happy":
            value = 2
            break
        case "coding everyday":
            value = 3
            break
        case "happy programmer":
            value = 4
            break
        case "unhappy codewarrior":
            value = 5
            break
        default:
            value = 5

        
    }
    return value
    //Happy Coding ^_^
    
  }


  console.log(happyCoding("Happy coding"))


