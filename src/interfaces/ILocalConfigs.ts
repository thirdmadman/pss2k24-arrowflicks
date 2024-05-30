import { IUserData } from './IUserData';

export interface ILocalConfigs {
  isExists: boolean;
  userData: IUserData;
  version: string;
}
