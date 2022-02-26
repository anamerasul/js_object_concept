const first ={a:1 ,b:2}

const second = {a:1,b:2}

const third =first;

if (first== second){
        console.log('object are equal')
}

else{
        console.log('object are different')
}
if (first== third){
        console.log('object are equal')
}

else{
        console.log('object are different')
}

console.log(JSON.stringify(first));
console.log(JSON.stringify(second));



if (JSON.stringify(first)==JSON.stringify(second)){
        console.log('object are equal')
}

else{
        console.log('object are different')
}


const first1 ={a:1 ,b:2}

const second1 = {b:2,a:1}

if (JSON.stringify(first1)==JSON.stringify(second1)){
        console.log('object are equal')
}

else{
        console.log('object are different')
}


// function compare

const first2 ={a:1 ,b:2}

const second2 = {b:2,a:1,c:2}

function compareObject(obj1,obj2){
        if(Object.keys(obj1).length !==Object.keys(obj2).length){
                return false
        }

        for(const prop in obj1){
                if(obj1[prop]!==obj2[prop]){
                        return false
                }
        }

        return true;
}


const isEqual =compareObject(first1,second1);

console.log(isEqual)