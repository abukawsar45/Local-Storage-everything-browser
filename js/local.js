const local = localStorage.getItem('S');
// console.log(local)

const setAge =( () =>{ 
    localStorage.setItem('age', 44)
})

console.log(setAge)