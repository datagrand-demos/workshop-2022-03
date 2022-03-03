export enum EAction {
  SaveAction = 'SaveAction',
  CopyAction = 'CopyAction',
  PasteAction = 'PasteAction',
  CutAction = 'CutAction',
  RunAction = 'RunAction',
  StopAction = 'StopAction'
}

export interface INavAction {
  name: string;
  icon: string;
  action: EAction
}

export type INavElement =
  {
    type: 'action'
  } & INavAction | {
    type: 'divider'
  } | {
    type: 'group',
    children: INavAction[]
  }