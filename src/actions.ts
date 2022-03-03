import saveIcon from './assets/images/save.svg';
import copyIcon from './assets/images/copy.svg';
import pasteIcon from './assets/images/paste.svg';
import cutIcon from './assets/images/cut.svg';
import runIcon from './assets/images/run.svg';
import stopIcon from './assets/images/stop.svg';

import { INavAction, EAction } from './models';

export const navActions: INavAction[] = [
  {
    name: '保存',
    icon: saveIcon,
    action: EAction.SaveAction
  },
  {
    name: '复制',
    icon: copyIcon,
    action: EAction.CopyAction
  },
  {
    name: '粘贴',
    icon: pasteIcon,
    action: EAction.PasteAction
  },
  {
    name: '剪切',
    icon: cutIcon,
    action: EAction.CutAction
  },
  {
    name: '运行',
    icon: runIcon,
    action: EAction.RunAction
  },
  {
    name: '终止',
    icon: stopIcon,
    action: EAction.StopAction
  }
]
