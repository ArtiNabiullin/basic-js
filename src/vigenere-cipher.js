const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const msgUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    const result = [];

    let keyIndex = 0;

    for (let i = 0; i < msgUpper.length; i += 1) {
      const charCode = msgUpper.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const msgCode = charCode - 65;
        const keyCode = keyUpper.charCodeAt(keyIndex % keyUpper.length) - 65;

        const encryptedCode = ((msgCode + keyCode) % 26) + 65;
        result.push(String.fromCharCode(encryptedCode));

        keyIndex += 1;
      } else {
        result.push(msgUpper[i]);
      }
    }
    return this.isDirect ? result.join("") : result.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    const msgUpper = encryptedMessage.toUpperCase();
    const keyUpper = key.toUpperCase();
    const result = [];

    let keyIndex = 0;

    for (let i = 0; i < msgUpper.length; i += 1) {
      const charCode = msgUpper.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const msgCode = charCode - 65;
        const keyCode = keyUpper.charCodeAt(keyIndex % keyUpper.length) - 65;

        const decryptedCode = ((msgCode - keyCode + 26) % 26) + 65;
        result.push(String.fromCharCode(decryptedCode));

        keyIndex += 1;
      } else {
        result.push(msgUpper[i]);
      }
    }
    return this.isDirect ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
