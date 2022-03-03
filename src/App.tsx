import { useState, useRef } from 'react';
import './App.scss';
import { message } from 'antd';
import { Nav } from './components/nav';
import { navElements } from './actions';
import { EAction } from './models';
import { startRun } from './services';
import { getPromiseWithAbort } from './utils';

function App() {
  const ref$ = useRef<() => void>();

  const handleCutAction = () => {
    message.success('剪切成功');
  }

  const handleCopyAction = () => {
    message.success('复制成功');
  }

  const handlePasteAction = () => {
    message.success('粘贴成功');
  }

  const handleRunAction = async () => {
    const { promise, abort } = getPromiseWithAbort(startRun())
    ref$.current = abort;
    await promise;
    message.success('运行成功');
  }

  const handleSaveAction = () => {
    message.success('保存成功');
  }

  const handleStopAction = () => {
    ref$.current?.();
    message.success('终止成功');
  }

  const onActionClick = (action: EAction) => {
    const actionMap = {
      [EAction.CutAction]: handleCutAction,
      [EAction.CopyAction]: handleCopyAction,
      [EAction.PasteAction]: handlePasteAction,
      [EAction.RunAction]: handleRunAction,
      [EAction.SaveAction]: handleSaveAction,
      [EAction.StopAction]: handleStopAction,
    }
    if (!actionMap[action]) {
      console.warn(`onActionClick warn，${action} 点击事件未被处理！`);
      return;
    }
    actionMap[action]();
  }

  return (
    <div className="App">
      <Nav
        elements={navElements}
        actionClick={onActionClick}
      />
    </div>
  )
}

export default App;
