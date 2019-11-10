var userKeys;
var userVal;

var userData = firebase.database().ref();

var secondData = otherProject.database().ref();



userData.on('value', function (callback) {
    userVal = callback.val();
    userKeys = Object.keys(userVal);
});

function registration() {
    document.querySelector('.overlay').classList.add('open');
    document.querySelector('.mask').style.display = 'block';
}

function signInPage() {
    $.ajax({
        url: 'registration/sign_in.html',
        success: function (page) {
            document.querySelector('.overlay__inner').title = 'Sign in';
            document.querySelector('.overlay__inner').innerHTML = page;
        },
        error: function (errorMessage) {
            alert('alinmadi');
            console.log(errorMessage);
        }
    });
};

function signUpPage() {
    console.log('asd')
    $.ajax({
        url: 'registration/sign_up.html',
        success: function (page) {
            document.querySelector('.overlay__inner').title = 'Sign up';
            document.querySelector('.overlay__inner').innerHTML = page;
        },
        error: function (errorMessage) {
            alert('alinmadi');
            console.log(errorMessage);
        }
    });
};

function signIn() {
    var myUsername = document.querySelector('#username_input').value;
    var myPassword = document.querySelector('#password_input').value;

    var dataArray = [];

    for (let i = 0; i < userKeys.length; i++) {
        var users_id = userKeys[i];
        var userNickname = userVal[users_id].nickname;
        dataArray.push(userNickname);
    }

    var userIndex = dataArray.indexOf(myUsername);
    if (userIndex === -1) {
        alert('hesab movcud deyil');
    }
    else {
        let userPassword = userVal[userKeys[userIndex]].password;
        if (userPassword !== myPassword) {
            alert('password duzgun deyil');
        }
        else {
            alert('ugurla daxil oldunuz');
        }
    }
};

function signUp() {
    var newUsername = document.querySelector('#username_input').value;
    var newPassword = document.querySelector('#password_input').value;

    var dataArray = [];

    for (let i = 0; i < userKeys.length; i++) {
        var users_id = userKeys[i];
        var userNickname = userVal[users_id].nickname;
        dataArray.push(userNickname);
    }

    if (dataArray.indexOf(newUsername) === -1) {
        userData.push({
            nickname: newUsername,
            password: newPassword
        });
        alert('qeydiyyat ugurlu oldu');
    }
    else {
        alert('bele nickname var');
    }
};

function checkUserName(){
    var myUsername = document.querySelector('#username_input').value;

    var dataArray = [];

    for (let i = 0; i < userKeys.length; i++) {
        var users_id = userKeys[i];
        var userNickname = userVal[users_id].nickname;
        dataArray.push(userNickname);
    }

    var userIndex = dataArray.indexOf(myUsername);
    if (userIndex !== -1) {
        alert('bu istifadeci adi movcuddur');
    }
}