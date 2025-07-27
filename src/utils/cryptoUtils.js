import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";

export function caesarEncrypt(text, shift) {
  return text.replace(/[a-z]/gi, (char) => {
    const base = (char=== char.toUpperCase()) ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - base + shift) % 26) + base
    );
  });
}

export function caesarDecrypt(text, shift) {
  return caesarEncrypt(text, 26 - (shift % 26)); // Reverse shift
}
