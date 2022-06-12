
document.getElementById("result").style.display = "none";
function onFormSubmit(e) {
    e.preventDefault();
    var data = JSON.parse(localStorage.getItem('dataList')) || [];
    alert('Are you sure want to submit?');
    
    var dataList = {};
    dataList.name = document.getElementById('fullname').value;
    dataList.email = document.getElementById('email').value;
    dataList.password = document.getElementById('password').value;

    data.push(dataList);
    
    localStorage.setItem('dataList', JSON.stringify(data));

    init(); 
    document.getElementById("result").style.display = "block";

    document.getElementById("formContainer").reset();
}


function init() {
    var getList = localStorage.getItem('dataList');
    var getData = JSON.parse(getList);
    console.log(getData);

    var table = document.getElementById("items");
    var tr = '';
    var length = getData.length;
    console.log(length);
    for(var i=0;i<length;i++) {
        tr += `<tr id="tableRow${i}">
                <td id="name${i}">${getData[i].name}</td>
                <td id="email${i}">${getData[i].email}</td>
                <td id="password${i}">${getData[i].password}</td>
        </tr>`
    }
    table.innerHTML = tr;
}



window.onload = function() {
    init()
    document.getElementById("result").style.display = "block";
};







////

// var arr = [1, 2, 3, 4, 5, 1, 1, 1];

// function duplicate(a) {
//     for (let i=0;i<arr.length;i++) {
//         if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
//             return true
//         }
//     }
//     return false
// }

// duplicate();


// function getDuplicateArrayElements(arr){
//     var sorted_arr = arr.slice().sort();
//     var results = [];
//     for (var i = 0; i < sorted_arr.length - 1; i++) {
//         if (sorted_arr[i + 1] === sorted_arr[i]) {
//             results.push(sorted_arr[i]);
//         }
//     }
//     return results;
// }

// var colors = ["red","orange","blue","green","red","blue"];
// var duplicateColors= getDuplicateArrayElements(colors);


// function hasDuplicates(array) {
//     return (new Set(array)).size !== array.length;
// }


function test() {
    console.log('test function');
}

const element = <p>{test()}</p>

ReactDOM.render(element, document.getElementById('root'));

