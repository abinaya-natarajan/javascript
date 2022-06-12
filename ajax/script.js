// function getUserId() {
//     var request = new XMLHttpRequest();

//     request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

//     request.onreadystatechange = function() {
//         if(this.readyState === 4 && this.status === 200) {
//             document.getElementById("result").innerHTML = this.responseText;
//         }
//     };

//     request.send();
// }


// let initiObject = {
//     method: 'GET'
// };


// var userRequest = new Request('https://jsonplaceholder.typicode.com/todos', initiObject);

// fetch(userRequest)
// .then(function(response) {
//     return response.json();
// })

// .then(function(data) {
//     console.log(data);
// })


// var userRequest = fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.log('Request failed', err));

// var userId = userRequest.map(function(user) {
//     return user.id
// });
// document.getElementById(result).innerHTML = userId;


// var userRequest;

// var userRequest = fetch('https://jsonplaceholder.typicode.com/todos')
// .then((res) => res.json())
// .then(output => {
//     var data = output;
//     console.log(data);
// })


// var data1 = function() {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => res.json())
//     .then(output => {
//         var details = output;
//         console.log(details);
//     })
// }

// var data = getData();
// function getData() {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(json) {
//         data = json;
//         console.log(json);
//     });
// }
// console.log(data);
// var userId;

// userId = data;




// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(json => console.log(json))



// var dataset;
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(data => dataset = data)
// .then(json => console.log(json))

//  console.log(dataset);


// let tempData = null;
// getTemp();

// function getTemp(){
// 	fetch('https://jsonplaceholder.typicode.com/todos')
// 		.then(function(response) {
// 			return response.json();
// 		})
// 		.then(function(data) {
// 			tempData = data;
// 			console.log(tempData);
// 			// executeFunctionWhichUsesTempData();
// 		});
// }

// console.log(tempData);


fetch('https://jsonplaceholder.typicode.com/todos')
.then(function(response) {
           return response.json();
        })

.then(function(json) {
    console.log(json);
    dataLogic(json);
    })

function dataLogic(datas) {
    // Sub-Task 1 - get only user ID = 6 data
    var getUser = datas.filter(function(data) {
        return data.userId == 6;
    });
    console.log(getUser);
    generateTemplate(getUser, 'userid_data', 'Data for user ID 6');
    
    // Sub-Task 2 - get  odd id  like id=1.3,5,7,9.... data
    var getOddUser = datas.filter(function(data) {
        return  data.id %2 !== 0;
    });
    console.log(getOddUser);
    generateTemplate(getOddUser, 'odd_user', 'Data for Odd User ID');

    // Sub-Task 3 - get only completed data
    var getCompletedData = datas.filter(function(data) {
        return data.completed === true;
    });
    console.log(getCompletedData);
    generateTemplate(getCompletedData, 'completed_data', 'Completed Data');

    // Sub-Task 4 - get only completed and user id = 9
    var getCompletedDataWithUser = datas.filter(function(data) {
        return data.completed === true && data.userId == 9;
    });
    console.log(getCompletedDataWithUser);    
    generateTemplate(getCompletedDataWithUser, 'completed_data_with_user', 'Completed Data with UserId 9');
    
    // Sub-Task 5 - get only all userID= 1 and id  > 10
    var getDataIdWithUserId = datas.filter(function(data) {
        return data.id > 10 && data.userId == 1;
    });
    console.log(getDataIdWithUserId);    
    generateTemplate(getDataIdWithUserId, 'dataid_with_userid', 'Data with UserId as 1 and Id greater than 10');    

}

function generateTemplate(datas, id, heading) {
    var str = `<h3>${heading}</h3>`;
    str += '<ul>';
    datas.forEach(function(user) {
        str += '<li>'+ user.title + '</li>';
    }); 
    str += '</ul>';
    document.getElementById(id).innerHTML = str; 
}


