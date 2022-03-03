import S from './index.module.scss';
import { INavElement, INavAction, EAction } from '../../models';

interface IProps {
  elements: INavElement[];
  actionClick: (key: EAction) => void;
}

export function Nav(props: IProps) {
  const {
    elements,
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
        elements.map((element, index) => {
          if (element.type === 'action') {
            return _renderAction(element);
          }
          if (element.type === 'divider') {
            return (
              <div key={index} className={S.divider} />
            )
          }
        })
      }
    </div>
  )
}