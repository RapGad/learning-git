function deleteNth(arr,n){

    let arrObj = arr.reduce((acc, curr)=>{
        acc[curr] = (acc[curr] || 0) + 1

        return acc
    },{})
    return Object.keys(arrObj).filter(num=> arrObj[num] <= n)

    //return arrObj

    // ...
}



console.log(deleteNth([1,2,2,2,2,3,4],2))