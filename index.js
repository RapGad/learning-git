function duplicateCount(text){
    let count = 0
    if(text === "") return 0
    let countedObj = text.split("").reduce((acc,curr)=>{
        acc[curr] = (acc[curr] || 0) + 1

        return acc
    },{})

    Object.values(countedObj).forEach(item => {
        item > 1 ? count += 1 : null
    })
    return count
    //...
  }


  console.log(duplicateCount("Indivisibility"))