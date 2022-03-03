import S from './index.module.scss';
import { INavAction, EAction } from '../../models';

interface IProps {
  actions: INavAction[];
  actionClick: (key: EAction) => void;
}

export function Nav(props: IProps) {
  const {
    actions,
    actionClick
  } = props;

  const onClick = (key?: EAction) => {
    if (!key) return;
    actionClick(key);
  }

  const _renderAction = (item: INavAction) => {
    return (
      <div
        className={S.wrap}
        key={item.name}
        onClick={() => onClick(item.action)}
      >
        <img src={item.icon} />
        <span>{item.name}</span>
      </div>
    )
  }

  return (
    <div className={S.nav}>
      {
        actions.map(action => {
          return _renderAction(action);
        })
      }
    </div>
  )
}