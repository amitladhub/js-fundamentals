const APILINK = 'https://jsonplaceholder.typicode.com/todos/1';

const promise = fetch(APILINK);

console.log(promise);

promise.then((response)=> {
  if(!response.ok) {
    console.log('errror')
     throw new error(response.status)
  }
  return response.json();//to extract and parse the JSON data from the response object.
})
.then((data) => {
  return data;
})
.then((user) => {
  console.log(user.title);
})
.catch(error=> {
  console.log(error.message);
});

const myPromise = new Promise((resolve, reject)=> {
  resolve('resolve');
});

myPromise.then((response)=>{
  console.log(response);
}).catch((error)=>{
  console.log(error)
});

const promise1 = new Promise((resolve, reject)=> {
  resolve('resolve1');
});
const promise2 = new Promise((resolve, reject)=> {
    resolve('resolve2');
});
const promise3 = new Promise((resolve, reject)=> {
  setTimeout(()=>{
    resolve('resolve3');
  },1000);
  
});

//Fulfills when all of the promises fulfill; rejects when any of the promises rejects.
Promise.all([promise1, promise2, promise3]).then((values)=>{
  console.log('Promise all', values);
});

//Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.
Promise.race([promise1, promise2, promise3]).then((values)=>{
  console.log('Promise race', values);
});

//Fulfills when all promises settle.
Promise.allSettled([promise1, promise2, promise3]).then((values)=>{
  console.log('Promise all settled', values);
});

//Fulfills when any of the promises fulfills; rejects when all of the promises reject.
Promise.any([promise1, promise2, promise3]).then((values)=>{
  console.log('Promise any', values);
});





