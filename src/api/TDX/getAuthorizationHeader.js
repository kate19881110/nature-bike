import JsSHA from "jssha";

function getAuthorizationHeader() {
  let AppID = "katelovejesus1110-b066927d-62f2-4122";
  let AppKey = "b7236ed5-a032-4ba2-8a1a-cbf0c9a37bc1";
  let GMTString = new Date().toGMTString();

  let ShaObj = new JsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update(`x-date: ${GMTString}`);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { Authorization, 'X-Date': GMTString }
}

export default getAuthorizationHeader;
