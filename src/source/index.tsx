import jju from 'jju';
import React, { useCallback, useState } from 'react';
import cls from './index.module.scss';

export interface SourceProps {
  onChange: (json: Record<string, any>) => void;
  onError: (e: Error) => void;
  className?: string;
}

const Source: React.FC<SourceProps> = ({ onChange, onError, className }) => {
  const [jsonStr, setJsonStr] = useState('');
  const onJsonChange = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement>) => {
      if (!e.target.value) {
        return;
      }
      try {
        const json = jju.parse(e.target.value);
        setJsonStr(jju.stringify(json, { indent: 2, mode: 'json' }));
        onChange(json);
      } catch (e) {
        onError(e);
      }
    },
    [onChange, onError],
  );
  return (
    <div className={`${className} ${cls.source}`}>
      <div className={cls.toolbar}>JSON 文本</div>
      <textarea
        value={jsonStr}
        onChange={(e) => {
          setJsonStr(e.target.value);
        }}
        onBlur={onJsonChange}
        placeholder='请在此处输入 JSON 文本，移除鼠标焦点进行格式化。'
      />
    </div>
  );
};

export default Source;
