import React, { useEffect, useRef } from 'react';
import cls from './index.module.scss';

export interface BoardProps {
  info?: Error | HTMLElement;
  className?: string;
}

const Board: React.FC<BoardProps> = ({ info, className }) => {
  const jsonRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!jsonRef.current) {
      return;
    }
    if (info instanceof HTMLElement) {
      jsonRef.current.innerHTML = '';
      jsonRef.current.appendChild(info);
    } else if (info instanceof Error) {
      jsonRef.current.innerHTML = info.toString();
    } else {
      jsonRef.current.innerHTML = '';
    }
  }, [jsonRef, info]);
  const hasError = info instanceof Error;
  return (
    <div className={`${className} ${cls.board}`}>
      <div className={cls.toolbar}>{hasError ? '错误信息' : 'JSON 信息'}</div>
      <div className={`${cls.json} ${hasError ? cls.error : ''}`} ref={jsonRef}></div>
    </div>
  );
};

export default Board;
