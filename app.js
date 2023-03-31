const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 화면 새로고침 방지
    loginForm.classList.add(HIDDEN_CLASSNAME); // form 다시 숨겨줌
    const username = loginInput.value; // value를 username이라는 key값으로 저장
    localStorage.setItem(USERNAME_KEY, username); // username이라는 key와 함께 local storage에 저장
    paintGreetings(username); // 유저정보가 input으로부터 옴
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 앱이 시작되면 local storage에서 savedUsername을 얻으려하는데, 거기서 username이라는 key 찾음
const savedUsername = localStorage.getItem(USERNAME_KEY);

// key와 value가 null일 때
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); // form 보여주기 위해 hidden 삭제
    loginForm.addEventListener("submit", onLoginSubmit); // form이 submit될 때만 함수 실행
} else {
    // greetings 보여주기
    paintGreetings(savedUsername); // 유저정보가 localStorage로부터 옴
}
