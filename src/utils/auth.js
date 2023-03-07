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

export function setUserInfo() {
  localStorage.setItem("userInfo", {
    role: "", // 角色,
    name: "",
    chargeStatus: "", // 費用狀態
    email: "", // 個人 mail
  });
}
