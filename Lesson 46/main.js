for (var x = 0; x <= 10; x++){
    console.log(x)
    if (x >= 5){
        break
    }
}

for (var y = 0; y <=10; y++){
    if(y%2 !==0){
        continue
    }
    console.log(y)
}