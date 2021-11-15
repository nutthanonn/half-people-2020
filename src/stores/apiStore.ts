import { observable, makeObservable, action } from "mobx";

interface categoriesProps {
  name: string;
  subcategories?: string[];
}

interface merchantsProps {
  shopNameTH: string;
  categoryName: string;
  subcategoryName: string;
  coverImageId: string;
  facilities: string[];
  priceLevel: number;
  isOpen: string;
  highlightText: string;
  recommendedItems: string[];
  addressProvinceName: string;
  addressDistrictName: string;
}

interface apitypes {
  categories?: categoriesProps[];
  provinces?: string[];
  priceRange?: string[];
  merchants?: merchantsProps[];
}

export class apiStoreImpl {
  Api: apitypes = {};

  constructor() {
    makeObservable(this, {
      Api: observable,
      Provinces: action,
    });
  }

  setApi(type: apitypes) {
    this.Api = type;
  }

  Provinces() {
    return this.Api.provinces;
  }
}

export const apiStore = new apiStoreImpl();
