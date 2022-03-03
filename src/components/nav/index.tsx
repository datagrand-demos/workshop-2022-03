import S from './index.module.scss';
import { navActions } from './actions';

export function Nav() {
  return (
    <div className={S.nav}>
      {
        navActions.map(action => {
          return (
            <div className={S.wrap} key={action.name}>
              <img src={action.icon} />
              <span>{action.name}</span>
            </div>
          )
        })
      }
    </div>
  )
}