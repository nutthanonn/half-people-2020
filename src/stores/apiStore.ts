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

interface apiTypes {
  categories?: categoriesProps[];
  provinces?: string[];
  priceRange?: string[];
  merchants?: merchantsProps[];
}

export class apiStoreImpl {
  Api: apiTypes = {};
  title: string = "ทั้งหมด";
  defaultSelect = [];

  constructor() {
    makeObservable(this, {
      Api: observable,
      title: observable,
      setApi: action,
      Provinces: action,
      Categories: action,
      Title: action,
    });
  }

  setApi(type: apiTypes) {
    this.Api = type;
  }

  Provinces() {
    if (this.Api.provinces) {
      return this.Api.provinces;
    }
    return [];
  }

  Categories(type: string) {
    if (this.Api.categories) {
      if (type === "name") {
        const res = this.Api.categories.map((item) => item.name);
        return res;
      }
    }
    return [];
  }

  Title(type: string) {
    this.title = type;
  }
}

export const apiStore = new apiStoreImpl();
