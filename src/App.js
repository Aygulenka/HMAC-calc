import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function App() {
  const [hmacKey, setHmacKey] = useState('');
  const [computerMove, setComputerMove] = useState('');
  const [decryptedValue, setDecryptedValue] = useState('');
  const [hmacForNode, setHmacForNode] = useState('');
  const [comparisonResult, setComparisonResult] = useState('');

  const handleDecode = () => {
    const decryptedValue = CryptoJS.HmacSHA256(computerMove, hmacKey).toString(CryptoJS.enc.Hex);
    setDecryptedValue(decryptedValue);

  };

  const compareHmac = () => {
    if (hmacForNode === decryptedValue) {
      setComparisonResult('OK');
    } else {
      setComparisonResult('что-то пошло не так');
    }
  };

  const handleCompareClick = () => {
    compareHmac();
  };

  return (
    <div>
      <h2>HMAC Decoder</h2>
      <div>
        <label>HMAC Key: </label>
        <input type="text" value={hmacKey} onChange={(e) => setHmacKey(e.target.value)} />
      </div>
      <div>
        <label>Computer Move: </label>
        <input type="text" value={computerMove} onChange={(e) => setComputerMove(e.target.value)} />
      </div>
      <button onClick={handleDecode}>Decode</button>
      <div>
        <label>Decrypted Value: </label>
        <span>{decryptedValue}</span>
      </div>

      <div>
        <label>Your HMAC in node.js: </label>
        <input type="text" value={hmacForNode} onChange={(e) => setHmacForNode(e.target.value)} />
        <button onClick={handleCompareClick}>OK</button>
      </div>
      <div>
        <label>Comparison Result: </label>
        <span>{comparisonResult}</span>
      </div>
    </div>
  );
}

export default App;
