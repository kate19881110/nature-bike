// 獲取 token
export function getToken() {
  return localStorage.getItem("token");
}

// 設置 token
export function setToken(token) {
  localStorage.setItem("token", token);
}

// 判斷 token 是否存在
export function isLogined() {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
}
