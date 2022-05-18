// setTimeout(() => { 
//   console.log('two seconds timeout')
// },2000)
// const names = ['shubhangi', 'stuti','sush']
// const shortNames = names.filter((name)=>
// { 
//   return name.length <=4
// })
// const geocode = (address,callback) => {
//   setTimeout(() =>{
//     const data = {
//       latitude : 0,
//       longtitude: 0
//     }
//   callback(data)

//   },2000)

// }
//  geocode('Philadelphia',(data) => {
//   console.log(data)
//  })

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b)
  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum)
})