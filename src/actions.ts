import saveIcon from './assets/images/save.svg';
import copyIcon from './assets/images/copy.svg';
import pasteIcon from './assets/images/paste.svg';
import cutIcon from './assets/images/cut.svg';
import runIcon from './assets/images/run.svg';
import stopIcon from './assets/images/stop.svg';

import { INavElement, EAction } from './models';

export const navElements: INavElement[] = [
  {
    type: 'action',
    name: '保存',
    icon: saveIcon,
    action: EAction.SaveAction
  },
  {
    type: 'divider',
  },
  {
    type: 'action',
    name: '复制',
    icon: copyIcon,
    action: EAction.CopyAction
  },
  {
    type: 'action',
    name: '粘贴',
    icon: pasteIcon,
    action: EAction.PasteAction
  },
  {
    type: 'action',
    name: '剪切',
    icon: cutIcon,
    action: EAction.CutAction
  },
  {
    type: 'divider',
  },
  {
    type: 'action',
    name: '运行',
    icon: runIcon,
    action: EAction.RunAction
  },
  {
    type: 'action',
    name: '终止',
    icon: stopIcon,
    action: EAction.StopAction
  }
]
