import CryptoJS from "crypto-js";

export function caesarEncrypt(text, shift) {
  return text.replace(/[a-z]/gi, (char) => {
    const base = char === char.toUpperCase() ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - base + shift) % 26) + base
    );
  });
}

export function caesarDecrypt(text, shift) {
  return caesarEncrypt(text, 26 - (shift % 26)); // Reverse shift
}

export function SHA256(text) {
  var hash = CryptoJS.SHA256(text);
  return hash;
}

export function SHA512(text) {
  var hash = CryptoJS.SHA3(text);
  return hash;
}
