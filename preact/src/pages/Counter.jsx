import { useSignal, useComputed } from '@preact/signals';
import { useState } from 'preact/hooks';

export function Counter() {
  // создание сигнала при помощи хука useSignal
  const count = useSignal(0);

  // создание вычисляемого сигнала
  const double = useComputed(() => count.value * 2);

  // const [count, setCount] = useState(0);

  // const double = count * 2;

  // const handleCount = () => {
  //   setCount(count => count+=1)
  // }

  return (
    <div>
      <p>
        {count} x 2 == {double}
      </p>
      <button onClick={() => count.value++}>Тык</button>
    </div>
  );
}