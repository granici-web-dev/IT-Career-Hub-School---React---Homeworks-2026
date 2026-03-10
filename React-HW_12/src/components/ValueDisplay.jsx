import { useRef, useEffect, useState } from 'react';

function ValueDisplay({ value }) {
  const prevValueRef = useRef('');
  const [prevValue, setPrevValue] = useState('');

  useEffect(() => {
    setPrevValue(prevValueRef.current);
    prevValueRef.current = value;
  }, [value]);

  return (
    <div className="mt-6 space-y-2">
      <p className="text-lg text-slate-700">
        <span className="font-semibold">Current Value:</span> {value}
      </p>
      <p className="text-lg text-slate-500">
        <span className="font-semibold">Previous Value:</span> {prevValue || '—'}
      </p>
    </div>
  );
}

export default ValueDisplay;