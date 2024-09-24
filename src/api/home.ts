import { apiHttp } from '@/utils/axios';

interface pageModel {
  current: number;
  size: number;
}
export interface demoModel extends pageModel{
  itemId?: string;
}

export const demoApi = (params: demoModel) => {
  return apiHttp.post({ url: '/cms/item/articleList', params });
};


