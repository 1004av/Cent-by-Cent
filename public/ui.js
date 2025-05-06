window.addEventListener('DOMContentLoaded', () => {
    const authButtons = document.createElement("div");
    authButtons.id = "auth-buttons";
    authButtons.style.position = "fixed";
    authButtons.style.top = "20px";
    authButtons.style.right = "20px";
    authButtons.style.zIndex = "9999";
  
    const loginBtn = document.createElement("button");
    loginBtn.textContent = "로그인";
    loginBtn.style.marginLeft = "10px";
    loginBtn.style.padding = "8px 14px";
    loginBtn.style.fontSize = "14px";
    loginBtn.style.cursor = "pointer";
  
    const signupBtn = document.createElement("button");
    signupBtn.textContent = "회원가입";
    signupBtn.style.marginLeft = "10px";
    signupBtn.style.padding = "8px 14px";
    signupBtn.style.fontSize = "14px";
    signupBtn.style.cursor = "pointer";
  
    authButtons.appendChild(signupBtn);
    authButtons.appendChild(loginBtn);
    document.body.appendChild(authButtons);
  });
  