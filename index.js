
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


