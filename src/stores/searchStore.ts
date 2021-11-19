import { observable, makeObservable, action } from "mobx";

export class SearchStoreImpl {
  province: string = "";

  constructor() {
    makeObservable(this, {
      province: observable,
    });
  }
}

export const searchStore = new SearchStoreImpl();
