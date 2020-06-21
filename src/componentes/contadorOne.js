import React, { useState, useEffect } from 'react';

function ContadorOne() {
  const [count, setCount] = useState(0);

  // Similar a componentDidMount y componentDidUpdate:
 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default  ContadorOne