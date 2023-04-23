export interface Item {
  id: string;
  category: string;
  productName: string;
  productPrice: number;
  description: string;
  detail: number;
  offPercentage?: number;
  userVendor?: string;
  productImage: string;
  likes: number;
  productImageList: string[];
}
