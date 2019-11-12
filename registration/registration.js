var userKeys;
var userVal;
var lastUserId;

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
    var newEmail = document.querySelector('#email_input').value;

    function fillFormPage() {
        $.ajax({
            url: 'registration/filling_information.html',
            success: function (page) {
                document.querySelector('.overlay__inner').title = 'Sign up';
                document.querySelector('.overlay__inner').innerHTML = page;
            },
            error: function (errorMessage) {
                alert('alinmadi');
                console.log(errorMessage);
            }
        });
    }

    var dataArray = [];

    for (let i = 0; i < userKeys.length; i++) {
        var users_id = userKeys[i];
        var userNickname = userVal[users_id].nickname;
        dataArray.push(userNickname);
    }

    if (dataArray.indexOf(newUsername) === -1) {
        userData.push({
            nickname: newUsername,
            password: newPassword,
            email: newEmail
        });
        alert('qeydiyyat ugurlu oldu');
        fillFormPage();
    }
    else {
        alert('bele nickname var');
    }
};

function checkUserName() {
    var myUsername = document.querySelector('#username_input').value;

    var dataArray = [];
    lastUserId = userKeys[userKeys.length - 1];
    console.log(lastUserId)
    console.log(userVal[lastUserId].name)
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

function fillForm() {
    var newName = document.querySelector('#name_input').value;
    var newSurname = document.querySelector('#surname_input').value;
    var newBirtday = document.querySelector('#birthday_input').value;
    var newTeam = document.querySelector('#team_input').value;

    //son qeydiyyatdan kecen(yeni yeni userin) Userin "id"si
    lastUserId = userKeys[userKeys.length - 1];

    //yeni userin melumatlarini update edir
    firebase.database().ref(lastUserId).update({
        name: newName,
        surname: newSurname,
        birthday: newBirtday,
        team: newTeam
    });
}

function updateProfil() {
    document.querySelector('#profile_info_name span').innerText = userVal[lastUserId].name + ' ' + userVal[lastUserId].surname;
    document.querySelector('#profile_info_team span').innerText = userVal[lastUserId].team;
    document.querySelector('#profile_info_nickname span').innerText = userVal[lastUserId].nickname;
    document.querySelector('#profile_info_email span').innerText = userVal[lastUserId].email;
    document.querySelector('#profile_info_birthday span').innerText = userVal[lastUserId].birthday;
} 
