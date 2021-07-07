import JSONFormatter from 'json-formatter-js';
import React, { useCallback, useState } from 'react';
import cls from './App.module.scss';
import Board from './board';
import Source from './source';

function App() {
  const [info, setInfo] = useState<Error | HTMLElement>();
  const onJsonChange = useCallback((json) => {
    const formatter = new JSONFormatter(json, 1, {
      hoverPreviewEnabled: true,
    });
    setInfo(formatter.render());
  }, []);
  const onJsonError = useCallback((error: Error) => {
    setInfo(error);
  }, []);
  return (
    <div className={cls.app}>
      <Source className={cls.source} onChange={onJsonChange} onError={onJsonError} />
      <Board className={cls.board} info={info} />
    </div>
  );
}

export default App;
