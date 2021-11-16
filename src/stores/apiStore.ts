import { observable, makeObservable, action } from "mobx";

interface categoriesProps {
  name: string;
  subcategories?: string[];
}

interface merchantsProps {
  shopNameTH?: string;
  categoryName?: string;
  subcategoryName?: string;
  coverImageId?: string;
  facilities?: string[];
  priceLevel?: number;
  isOpen?: string;
  highlightText?: string;
  recommendedItems?: string[];
  addressProvinceName?: string;
  addressDistrictName?: string;
}

interface apiTypes {
  categories?: categoriesProps[];
  provinces?: string[];
  priceRange?: string[];
  merchants?: merchantsProps[];
}

export class apiStoreImpl {
  Api: apiTypes = {};
  title: string = "ร้านอาหารและเครื่องดื่ม";

  constructor() {
    makeObservable(this, {
      Api: observable,
      title: observable,
      setApi: action,
      Provinces: action,
      Categories: action,
      Title: action,
      PriceRange: action,
      TypeRestaurant: action,
      StoreCardData: action,
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

  PriceRange() {
    if (this.Api.priceRange) {
      return this.Api.priceRange;
    }
    return [];
  }

  TypeRestaurant() {
    let text = this.title;
    if (text === "ทั้งหมด") {
      return [];
    }
    if (this.Api.categories) {
      const res = this.Api.categories?.filter(
        (item) => item.name === this.title
      );
      const response: string[] | undefined = res[0].subcategories;
      const uniq = [...new Set(response)];
      return uniq;
    }
    return [];
  }

  StoreCardData() {
    if (this.Api.merchants) {
      return this.Api.merchants;
    }
    return [];
  }
}

export const apiStore = new apiStoreImpl();
