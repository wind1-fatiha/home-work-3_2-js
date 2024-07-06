const factory=(number)=>{
    if(number===0){
        return 1
    }
    return number * factory(number-1)
}

console.log(factory(5))
