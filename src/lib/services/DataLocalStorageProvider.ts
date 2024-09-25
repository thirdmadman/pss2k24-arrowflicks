import { LOCAL_STORAGE_CONFIGS_VERSION, LOCAL_STORAGE_ITEM_NAME } from '@/shared/configs';
import { ILocalConfigs } from '@/types/interfaces/ILocalConfigs';
import { IUserData } from '@/types/interfaces/IUserData';

const configVersion = LOCAL_STORAGE_CONFIGS_VERSION;

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class DataLocalStorageProvider {
  static localStorageItemName = LOCAL_STORAGE_ITEM_NAME;

  public static setData(data: ILocalConfigs) {
    localStorage.setItem(DataLocalStorageProvider.localStorageItemName, JSON.stringify(data));
  }

  public static isNotEmpty() {
    const localStorageData = localStorage.getItem(DataLocalStorageProvider.localStorageItemName);

    if (localStorageData && localStorageData.startsWith('{')) {
      const dataILocalConfigs = JSON.parse(localStorageData) as ILocalConfigs;
      const localStorageKeysNumber = Object.keys(dataILocalConfigs).length;
      if (localStorageKeysNumber > 0) {
        return true;
      }
    }

    return false;
  }

  public static destroy() {
    localStorage.removeItem(DataLocalStorageProvider.localStorageItemName);
  }

  public static getData() {
    if (DataLocalStorageProvider.isNotEmpty()) {
      const localStorageData = localStorage.getItem(DataLocalStorageProvider.localStorageItemName);
      if (localStorageData) {
        const dataILocalConfigs = JSON.parse(localStorageData) as ILocalConfigs;
        if (dataILocalConfigs.version && dataILocalConfigs.version === configVersion) {
          return dataILocalConfigs;
        }
      }
    }

    const generatedData = DataLocalStorageProvider.generateData();
    DataLocalStorageProvider.setData(generatedData);
    return generatedData;
  }

  private static generateData() {
    const userData = {
      userMoviesRating: [],
      lastSearchQuery: null,
    } as IUserData;

    const configs = {
      isExists: true,
      userData,
      version: configVersion,
    };
    return configs as ILocalConfigs;
  }
}

export default DataLocalStorageProvider;
