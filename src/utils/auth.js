// 獲取 token
export function getToken() {
  return localStorage.getItem("token");
}

// 設置 token
export function setToken(token) {
  localStorage.setItem("token", token);
}

// 刪除 token
export function deleteToken() {
  localStorage.removeItem("token");
}

// 判斷 token 是否存在
export function isLogined() {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
}

export function setUserInfo(name, email, role, club, chargeStatus) {
  const myObject = {
    name,
    email, // 個人 mail
    role, // 角色,
    club, // 社團
    chargeStatus, // 費用狀態
  };
  const jsonString = JSON.stringify(myObject);// 轉換JSON字串
  localStorage.setItem("userInfo", jsonString);
}


// 獲取 token
export function getUserInfo() {
  const jsonString = localStorage.getItem("userInfo");
  const myObject = JSON.parse(jsonString);
  return myObject
}
