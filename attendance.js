function whenipresssubmit(){    
    var attendance = document.getElementById('attendance');
    attendance.style.display = 'none';

    var viewAtten = document.getElementById('viewAtten');
    viewAtten.style.display = 'inline';

    var thankyou = document.getElementById('thankyou');
    thankyou.style.display= 'inline';
    
    //linking the variables to the HTML inputs
    var date = document.getElementById('date');
    
    var rollNo = document.getElementById('rollno');

    var name = document.getElementById('name');

    //setting the local storage for the above variables
    localStorage.setItem('date', date.value);

    localStorage.setItem('Roll number', rollNo.value);

    localStorage.setItem('Name', name.value);
}

function whenipressback(){

    var back = document.getElementById('back');
    back.style.display = 'none';

    var attendance = document.getElementById('attendance');
    attendance.style.display = 'inline';
}

function whenipressViewAtten(){ 
    attendance.style.display = 'none';

    var viewAtten = document.getElementById('viewAtten');
    viewAtten.style.display = 'none';

    //creating a message for the user
    let finalMessage = document.createElement('h2');
    finalMessage.setAttribute('class', 'finalMessage')
    finalMessage.setAttribute('id', 'finalMessage');
    document.body.appendChild(finalMessage);
    finalMessage.innerHTML = 'After you have marked your attendance just click the button below, then you can leave this page:- ';

    //this is the button that will remove all the local storage off of the web browser
    let removeLocalStorage = document.createElement('button');
    removeLocalStorage.setAttribute('id', 'removeLocal');
    removeLocalStorage.setAttribute('class', 'removeLocalStorage');
    removeLocalStorage.setAttribute('onclick', 'whenipressRemove()');
    document.body.appendChild(removeLocalStorage);
    removeLocalStorage.innerHTML = 'Click me';

    //making the div div for then 
    let localDiv = document.createElement('div');
    localDiv.setAttribute('id', 'localDiv');
    localDiv.setAttribute('class', 'localDiv');
    document.body.appendChild(localDiv);

    //making the date 
    let dateDiv = document.createElement('h3');
    dateDiv.setAttribute('id', 'dateDiv');
    dateDiv.setAttribute('class', 'dateDiv');
    localDiv.appendChild(dateDiv);
    dateDiv.innerHTML = 'Date: ' + localStorage.getItem('date')

    //making roll number 
    let rollDiv = document.createElement('h3');
    rollDiv.setAttribute('id', 'rollDiv');
    rollDiv.setAttribute('class', 'rollDiv');
    localDiv.appendChild(rollDiv);
    rollDiv.innerHTML = 'Roll number: ' + localStorage.getItem('Roll number');

    //making the name
    let nameDiv = document.createElement('h3');
    nameDiv.setAttribute('id', 'nameDiv');
    nameDiv.setAttribute('class', 'nameDiv');
    localDiv.appendChild(nameDiv);
    nameDiv.innerHTML = 'Name: ' + localStorage.getItem('Name');
}

//this function remove the localStorage off of the users machine
function whenipressRemove(){
    //removing the date
    localStorage.removeItem('date');

    //removing the roll number
    localStorage.removeItem('Roll number');

    //removing the name
    localStorage.removeItem('name');

}

