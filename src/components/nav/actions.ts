import saveIcon from '../../assets/images/save.svg';
import copyIcon from '../../assets/images/copy.svg';
import pasteIcon from '../../assets/images/paste.svg';
import cutIcon from '../../assets/images/cut.svg';
import runIcon from '../../assets/images/run.svg';
import stopIcon from '../../assets/images/stop.svg';

export interface INavAction {
  name: string;
  icon: string;
}

export const navActions: INavAction[] = [
  {
    name: '保存',
    icon: saveIcon
  },
  {
    name: '复制',
    icon: copyIcon
  },
  {
    name: '粘贴',
    icon: pasteIcon
  },
  {
    name: '剪切',
    icon: cutIcon
  },
  {
    name: '运行',
    icon: runIcon
  },
  {
    name: '终止',
    icon: stopIcon
  }
]
