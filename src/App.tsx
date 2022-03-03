import './App.scss';
import { message } from 'antd';
import { Nav } from './components/nav';
import { navActions } from './actions';
import { EAction } from './models';

function App() {

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
    message.success('运行成功');
  }

  const handleSaveAction = () => {
    message.success('保存成功');
  }

  const handleStopAction = () => {
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
        actions={navActions}
        actionClick={onActionClick}
      />
    </div>
  )
}

export default App;
