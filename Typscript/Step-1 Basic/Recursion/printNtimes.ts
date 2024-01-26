function print(n:number) {
    if(n<1) {
        return
    }
    console.log("Hi");
    print(n-1)
}

print(5)