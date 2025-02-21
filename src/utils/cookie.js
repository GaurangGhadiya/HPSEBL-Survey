import Cookies from "js-cookie";
import { decryptData, encryptDataPost } from "./encryptDecrypt";

// Save the token in localStorage
export const saveToken = (data) => {
  Cookies.set("hpsebl_userName", encryptDataPost(JSON.stringify(data.username))); // expires in 1 days
  Cookies.set("hpsebl_block", JSON.stringify(data?.block || "")); // expires in 1 days
  Cookies.set("hpsebl_district", JSON.stringify(data?.district || "")); // expires in 1 days
  Cookies.set("hpsebl_panchayat", JSON.stringify(data?.panchayat || "")); // expires in 1 days
  Cookies.set("hpsebl_village", JSON.stringify(data?.village || ""));
  Cookies.set("hpsebl_divisionCode", encryptDataPost(JSON.stringify(data?.divisionCode)));
  Cookies.set("hpsebl_divisionName", encryptDataPost(JSON.stringify(data?.divisionName)));
  Cookies.set("hpsebl_subDivisionCode", encryptDataPost(JSON.stringify(data?.subDivisionCode)));
  Cookies.set("hpsebl_subDivisionName", encryptDataPost(JSON.stringify(data?.subDivisionName)));
  Cookies.set("hpsebl_name", encryptDataPost(JSON.stringify(data?.employeeName)));
  Cookies.set("hpsebl_roles", encryptDataPost(JSON.stringify(data?.roles)));
  // Cookies.set('authToken', data?.token, { expires: 1 }); // Set the token to expire in 7 days, adjust as needed
  Cookies.set('hpsebl_authToken', data?.token, { expires: 1 }); // Set the token to expire in 7 days, adjust as needed
  Cookies.set('hpsebl_ulb', data.id, { expires: 1 }); // Set the token to expire in 7 days, adjust as needed
};

// Retrieve the token from localStorage
export const getToken = () => {
  return Cookies.get("hpsebl_authToken");
};

export const getdivisionCode = () => {
  return decryptData(Cookies.get("hpsebl_divisionCode"));
};
export const getdivisionName = () => {
  return decryptData(Cookies.get("hpsebl_divisionName"));
};
export const getsubDivisionCode = () => {
  return decryptData(Cookies.get("hpsebl_subDivisionCode"));
};
export const getUserName = () => {
  return decryptData(Cookies.get("hpsebl_userName"));
};
export const getsubDivisionName = () => {
  return decryptData(Cookies.get("hpsebl_subDivisionName"));
};
export const getName = () => {
  return decryptData(Cookies.get("hpsebl_name"));
};

export const getRoles = () => {
  return decryptData(Cookies.get("hpsebl_roles"));
};
export const getBlock = () => {
  return Cookies.get("hpsebl_block");
};
export const getDistrict = () => {
  return Cookies.get("hpsebl_district");
};
export const getPanchayat = () => {
  return Cookies.get("hpsebl_panchayat");
};
export const getVillage = () => {
  return Cookies.get("hpsebl_village");
};
export const getUlb = () => {
  return Cookies.get("hpsebl_id");
};

// Remove the token from localStorage
export const removeToken = () => {
  // Cookies.set('userName', null, { expires: 1 }); // expires in 1 days
  // Cookies.set('authToken', null, { expires: 1 });
  // Cookies.set('ulb', null, { expires: 1 }); // expires in 1 days

  Cookies.remove("hpsebl_authToken");
  Cookies.remove("hpsebl_userName");
  Cookies.remove("hpsebl_name");
  Cookies.remove("hpsebl_roles");
  Cookies.remove("hpsebl_block");
  Cookies.remove("hpsebl_district");
  Cookies.remove("hpsebl_panchayat");
  Cookies.remove("hpsebl_village");

  // Cookies.remove('authToken', { path: '' })
  // Cookies.remove('userName', { path: '' })
  // Cookies.remove('ulb', { path: '' })

  const cookies = Cookies.get(); // Get all cookies

  for (const cookie in cookies) {
    if (cookies.hasOwnProperty(cookie)) {
      Cookies.remove(cookie); // Remove each cookie
    }
  }
};
