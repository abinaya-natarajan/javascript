// var payload = {
//     userId: 1,
//     title: 'Sending new data for testing purpose',
//     body: 'Lorem ipsum content Lorem ipsum content'
// };

// var data = new FormData();
// data.append( "json", JSON.stringify( payload ) );

// fetch("https://jsonplaceholder.typicode.com/posts",
// {
//     method: "POST",
//     body: data
// })
// .then(function(res){ return res.json(); })
// .then(function(data){ alert( JSON.stringify( data ) ) })



// fetch('https://jsonplaceholder.typicode.com/posts/2', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 2,
//         title: "that was a solution",
//         body: "is existed at the time of life \ 'Blessed are the pain of her pains",
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
// .then(function(response) {
//     return response.json();
// })
// .then(function(json) {
//     console.log(json);
// })


// fetch('https://jsonplaceholder.typicode.com/posts/2', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: "foo",
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
// .then(function(response) {
//     return response.json();
// })
// .then(function(json) {
//     console.log(json);
// })

// fetch('https://jsonplaceholder.typicode.com/posts/2', {
//   method: 'DELETE',
// });


fetch("https://jsonplaceholder.typicode.com/posts", { 
      
    // Adding method type 
    method: "POST", 
      
    // Adding body or contents to send 
    body: JSON.stringify({ 
        title: "foo", 
        body: "bar", 
        userId: 1 
    }), 
      
    // Adding headers to the request 
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
}) 
  
// Converting to JSON 
.then(response => response.json()) 
  
// Displaying results to console 
.then(json => console.log(json));