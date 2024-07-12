// components/VisitorCounter.tsx
import { useState, useEffect } from 'react';

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const res = await fetch('/api/visitors');
      const data = await res.json();
      setCount(data.count);
    };

    fetchVisitorCount();
    incrementVisitorCount();
  }, []);

  const incrementVisitorCount = async () => {
    await fetch('/api/visitors', { method: 'POST' });
  };

  return (
    <div className="visitor-counter p-4 bg-blue-100 rounded shadow-md">
      <h1 className="text-2xl font-bold">Nombre de visiteurs : {count}</h1>
    </div>
  );
};

export default VisitorCounter;
