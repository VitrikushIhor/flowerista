import {rtkApi} from '../../../../../shared/api/rtkApi.ts';
import {
	InterfaceAllFlower,
	InterfaceFetchAllFlowers,
} from '../../types/flowers.ts';

const getAllFlowersApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getAllFlowers: build.query<InterfaceAllFlower, InterfaceFetchAllFlowers>({
			query: (data) => ({
				url: `/bouquete?page=${data.page}
        			${data.lang && `&lang=${data.lang}`}
        			${data.flowerIds && `&${data.flowerIds}`}
        			${data.colorIds && `&${data.colorIds}`}
        			${data.minPrice && data.minPrice > data.min ? `&minPrice=${data.minPrice}` : ''}
              ${data.maxPrice && data.maxPrice < data.max ? `&maxPrice=${data.maxPrice}` : ''}
              ${data.sortByNewest ? `&sortByNewest=${data.sortByNewest}` : ''}
              ${data.sortByPriceHighToLow ? `&sortByPriceHighToLow=${data.sortByPriceHighToLow}` : ''}
              ${data.sortByPriceLowToHigh ? `&sortByPriceLowToHigh=${data.sortByPriceLowToHigh}` : ''}
        			&size=20
        			`,
			}),
		}),
	}),
});

export const useGetAllFlowers = getAllFlowersApi.useGetAllFlowersQuery;

