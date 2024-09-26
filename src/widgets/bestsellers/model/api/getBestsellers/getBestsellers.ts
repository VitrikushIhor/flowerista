import { rtkApi } from '../../../../../shared/api/rtkApi.ts';
import { InterfaceFlowerCard } from '../../../../../features/card/model/types/InterfaceFlowerCard.ts';

const getBestsellersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getBestsellers: build.query<InterfaceFlowerCard[], string>({
      query: (lang) => ({
        url: `/bouquete/bs?lang=${lang}`
      })
    })
  })
});

export const useGetBestsellers = getBestsellersApi.useGetBestsellersQuery;
