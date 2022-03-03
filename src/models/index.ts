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