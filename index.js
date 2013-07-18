var lib = require('./build/Release/rijndael');

var Rijndael = function(key, encoding) {
  if (!(this instanceof Rijndael))
    return new Rijndael(key);

  if (!Buffer.isBuffer(key))
    key = new Buffer(key, encoding);

  this._key = key;
};

Rijndael.prototype.encrypt = function(plaintext) {
  if (!Buffer.isBuffer(plaintext))
    throw new TypeError('plaintext must be a buffer');
  return lib.rijndael(plaintext, this._key, true);
};

Rijndael.prototype.decrypt = function(ciphertext) {
  if (!Buffer.isBuffer(ciphertext))
    throw new TypeError('ciphertext must be a buffer');
 return lib.rijndael(ciphertext, this._key, false);
};

var createRijndael = function(key, encoding) {
  return new Rijndael(key, encoding);
};

createRijndael.encrypt = function(plaintext, key) {
  return lib.rijndael(plaintext, key, true);
};

createRijndael.decrypt = function(ciphertext, key) {
  return lib.rijndael(ciphertext, key, false);
};

createRijndael.version = "0.0.2";

module.exports = createRijndael;
