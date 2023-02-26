import { useState, useEffect } from 'react'

const fakeFetchColors = () => {
  return Promise.resolve(
      ['red', 'green', 'blue']
  );
}

const LoadableColorList = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fakeFetchColors()
      .then(c => setColors(c));
  }, []);

  const renderedColors = colors.map(color => {
    return <li key={color}>{color}</li>
  });

  return <ui>{renderedColors}</ui>
}

export default LoadableColorList;