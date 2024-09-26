import {rtkApi} from '../../../../../shared/api/rtkApi.ts';
import {InterfaceFlower} from '../../types/flower.ts';

const getFlowersApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getFlowers: build.query<InterfaceFlower[], string>({
			query: (lang) => ({
				url: `/flower?lang=${lang}`,
			}),
		}),
	}),
});

export const useGetFlowers = getFlowersApi.useGetFlowersQuery;
