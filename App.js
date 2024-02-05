import React, { useState } from 'react';
import crypto from 'crypto';

const HmacCalculator = ({ hmacKey, computerMove }) => {
  const [decryptedValue, setDecryptedValue] = useState('');

  const calculateHmac = () => {
    const hmac = crypto.createHmac('sha256', hmacKey);
    hmac.update(computerMove);
    const calculatedHmac = hmac.digest('hex');
    setDecryptedValue(calculatedHmac);
  };

  return (
    <div>
      <div>
        <strong>HMAC Key:</strong> {hmacKey}
      </div>
      <div>
        <strong>Computer Move:</strong> {computerMove}
      </div>
      <button onClick={calculateHmac}>Calculate HMAC</button>
      <div>
        <strong>Decrypted Value:</strong> {decryptedValue}
      </div>
    </div>
  );
};

const App = () => {
  const [hmacKey, setHmacKey] = useState('');
  const [computerMove, setComputerMove] = useState('');

  return (
    <div>
      <label>
        HMAC Key:
        <input type="text" value={hmacKey} onChange={(e) => setHmacKey(e.target.value)} />
      </label>
      <br />
      <label>
        Computer Move:
        <input type="text" value={computerMove} onChange={(e) => setComputerMove(e.target.value)} />
      </label>
      <br />
      <HmacCalculator hmacKey={hmacKey} computerMove={computerMove} />
    </div>
  );
};

export default App;
