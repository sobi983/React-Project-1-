const names = ['alice', 'bob', 'charlie', 'danielle']

const output = names.map(function(itmes){
    return itmes.charAt(0).toUpperCase () + itmes.slice(1)
})

const output2 = names.map((items)=>{
    return `<p>${items}</p>`
})

console.log(output2)