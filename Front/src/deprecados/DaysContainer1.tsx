import { useRef, useEffect, useState } from 'react';

function DaysContainer() {
  const [counter, setCounter] = useState(1);
  const daysContainerRef = useRef<HTMLDivElement>(null);
  const currentTaskContainerRef = useRef<HTMLDivElement>(null);
  
  function calculateScrollPercentage(container: HTMLDivElement) {
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
  }

  function updateContainersByScroll() {
    const daysContainer = daysContainerRef.current!;
    const previousContainer = daysContainer.querySelector('.previousTaskContainer')!;
    const currentContainer = daysContainer.querySelector('.currentTaskContainer')!;
    const nextContainer = daysContainer.querySelector('.nextTaskContainer')!;

    const scrollPercentage = calculateScrollPercentage(daysContainer);
    const thresholdPercentage = 25;

    if (scrollPercentage <= thresholdPercentage) {
      nextContainer.remove();
      currentContainer.className = 'nextTaskContainer';
      currentContainer.classList.remove('currentTaskContainer');

      previousContainer.className = 'currentTaskContainer';
      previousContainer.classList.remove('previousTaskContainer');

      const previousDiv = document.createElement('div');
      previousDiv.innerHTML = 'DIA ' + counter;
      previousDiv.classList.add('previousTaskContainer');
      daysContainer.insertBefore(previousDiv, previousContainer);
    } else if (scrollPercentage >= 100 - thresholdPercentage) {
      previousContainer.remove();
      nextContainer.className = 'currentTaskContainer';
      nextContainer.classList.remove('nextTaskContainer');

      currentContainer.className = 'previousTaskContainer';
      currentContainer.classList.remove('currentTaskContainer');

      const nextDiv = document.createElement('div');
      nextDiv.classList.add('nextTaskContainer');
      nextDiv.innerHTML = 'DIA ' + (counter + 2);
      daysContainer.appendChild(nextDiv);
    }
    setCounter(prevCounter => prevCounter + 1);
  }

  useEffect(() => {
    const daysContainer = daysContainerRef.current!;
    daysContainer.addEventListener('scroll', updateContainersByScroll);
    return () => {
      daysContainer.removeEventListener('scroll', updateContainersByScroll);
    };
  }, []);

  useEffect(() => {
    const currentTaskContainer = currentTaskContainerRef.current;
    if (currentTaskContainer) {
      currentTaskContainer.focus();
    }
  }, []);

  return (
    <div className="daysContainer" ref={daysContainerRef}>
      <div className="previousTaskContainer">
        {'DIA ' + (counter - 1)}
      </div>
      <div className="currentTaskContainer"
      ref={currentTaskContainerRef}
      tabIndex={0}>
        {'DIA ' + counter}
      </div>
      <div className="nextTaskContainer">
        {'DIA ' + (counter + 1)}
      </div>
    </div>
  );
}

export default DaysContainer;
