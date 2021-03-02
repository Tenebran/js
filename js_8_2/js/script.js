let Objects1 = { 
    x: 20,
    y: 60, 
    z: 70
}; 

let Objects2  = { 
    x: 10,
    y: 30, 
    g: 20
};

function assignObjects(obj1, obj2){
    let obj3 = {};
    
    for(let key in obj1){
        obj3[key] = obj1[key];
    }
    
    for(let key in obj2){
        obj3[key] = obj2[key];
    }
    return obj3
}

console.log(assignObjects(Objects1, Objects2));