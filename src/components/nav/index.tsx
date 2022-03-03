import S from './index.module.scss';
import { INavElement, INavAction, EAction } from '../../models';

interface IProps {
  elements: INavElement[];
  actionClick: (key: EAction) => void;
  hideActions?: EAction[];
  disableActions?: EAction[];
}

export function Nav(props: IProps) {
  const {
    elements,
    actionClick,
    hideActions = [],
    disableActions = []
  } = props;

  const onClick = (key?: EAction) => {
    if (!key) return;
    actionClick(key);
  }

  const _renderAction = (item: INavAction) => {
    if (hideActions.includes(item.action)) {
      return null;
    }

    const disabled = disableActions.includes(item.action);

    return (
      <div
        className={`${S.wrap} ${disabled && S['disable-action']}`}
        key={item.name}
        onClick={() => onClick(item.action)}
      >
        <img src={item.icon} />
        <span>{item.name}</span>
      </div>
    )
  }

  const _renderGroup = (actions: INavAction[]) => {
    return (
      actions.map((action) => {
        return (
          <div key={action.name} className={S['action-group-child']}>
            {_renderAction(action)}
          </div>
        )
      })
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
          if (element.type === 'group') {
            return (
              <div key={index} className={S['action-group']} >
                {
                  _renderGroup(element.children)
                }
              </div >
            )
          }
        })
      }
    </div>
  )
}