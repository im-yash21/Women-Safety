function count() {
    text.textContent += arr[i]
    if (i == arr.length - 1) { return }
    i++;
    setTimeout(() => { count() }, 200);
}
let i = Number(0)
var flag = true
var loop = false
const text = document.getElementById('Text')
const login = document.getElementById('Login')
const popupContainer = document.getElementById('popup-container');
const popup = document.getElementById('popup')
const popup_1 = document.getElementById('popup-1')
const popup_2 = document.getElementById('popup-2')
const popup_msg = document.getElementById('popup-message')
const btn = document.getElementById('ok-btn')

const confirm = document.getElementById('confirm')
const username = document.getElementById('username')
const password = document.getElementById('password')
const confirmpassword = document.getElementById('confirmPassword')
const city = document.getElementById('city')
const email = document.getElementById('email')
const num = document.getElementById('num')

const profile = document.getElementById('profile')
const dts = document.getElementById('dts')
const suy = document.getElementById('suy')

const rest = document.getElementsByClassName('rest')

const user_name = document.getElementById('user_name')
const pass_word = document.getElementById('pass_word')

var o
var data = Array()
var k = 0
var arr = "elcome To Women Safety"
count()
function log(islogin) {
    if (islogin) {
        login.style.color = 'white'
        login.textContent = 'Log Out'
        loop = true
    }
    else if (!loop) {
        reset()
        popupContainer.style.display = 'block';
        popup_1.style.display = 'block'
    }
    else {
        login.style.color = 'black'
        profile.style.display = 'none'
        login.textContent = 'Log in'
        loop = false
    }
}
function reg() {
    popup_2.style.display = 'block'
    popup_1.style.display = 'none'
}
function database() {
    popup.style.display = 'block'
    popup_2.style.display = 'none'
    if (secure()) {
        popup_msg.innerHTML = `username already exist`
        return 0
    }
    if (username.value.length > 5 && password.value.length > 5 && (password.value == confirmpassword.value)) {
        data.push({
            D_username: username.value,
            D_password: password.value,
            D_city: city.value,
            D_email: email.value,
            D_num: num.value
        })
        popup_msg.innerHTML = `username : ${username.value} <br> password : ${password.value}`
        flag = false
        return 0
    }
    popup_msg.innerHTML = `username and password  <br> length must be greater 5`
}
function check() {
    popup.style.display = 'none'
    if (!flag) {
        popup_1.style.display = 'block'
        return 0;
    }
    popup_2.style.display = 'block'
}
function checking() {
    if (go()) {
        popup_1.style.display = 'none'
        popupContainer.style.display = 'none'
        profile.style.display = 'flex'
        dts.innerHTML = `Username : ${data[o].D_username} <br> Password: ${data[o].D_password} 
    <br> Email: ${data[o].D_email} <br> City: ${data[o].D_city}  <summary> Hi ${data[o].D_username}</summary> `
        log(true)
    }
    else {
        popup_1.style.display = 'none'
        popup.style.display = 'block'
        popup_msg.textContent = 'Username and password is wrong'
    }
}
function go() {
    for (let m = 0; m < data.length; m++) {
        console.log(m)
        if (user_name.value == data[m].D_username) {
            for (let j = 0; j < data.length; j++) {
                console.log(j)
                if (pass_word.value == data[j].D_password) {
                    console.log(data[m].D_username, data[m].D_password)
                    if (m == j) {
                        o = m
                        return true
                    }
                }
            }
        }
    }
    return false
}
function reset() {
    for (let l = 0; l <= 7; l++) {
        rest[l].value = ''
    }
}


function secure() {
    for (let m = 0; m < data.length; m++) {
        console.log(m)
        if (username.value == data[m].D_username) {
            return true
        }
    }
    return false
}