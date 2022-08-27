const obj = {
    name: 'Alice',
    cat: {
        name: 'lyrica Prismriver',
        cat1:{
            name:'Lunasa Prismriver',
            cat2:{
                name:'Merlin Prismriver',
                // cat3:{
                //     name:'Chen',
                    cat4:{
                        name:'Margatroid'
                    }
                // }
            }
        }
    }
}
if(obj.cat?.cat1?.cat2?.cat3?.cat4){
    console.log(obj.cat.cat1.cat2.cat3.cat4.name)
}

const obj2 = {
    // getName(value){
    //     console.log(value)
    // }
}
obj2.getName?.(123)

// ?.: dùng khi không chắc sự tồn tại của 1 key