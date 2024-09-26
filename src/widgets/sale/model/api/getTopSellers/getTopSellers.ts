import {rtkApi} from '../../../../../shared/api/rtkApi.ts';
import {InterfaceFlowerCard} from '../../../../../features/card/model/types/InterfaceFlowerCard.ts';

const getTopSellersApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getTopSellers: build.query<InterfaceFlowerCard[], string>({
			query: (lang) => ({
				url: `/bouquete/ts?lang=${lang}`,
			}),
		}),
	}),
});

export const useGetTopSellers = getTopSellersApi.useGetTopSellersQuery;
