import {rtkApi} from '../../../../../shared/api/rtkApi.ts';
import {InterfaceFlower} from '../../types/flower.ts';

const getColorsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getColors: build.query<InterfaceFlower[], string>({
			query: (lang: string) => ({
				url: `/color?lang=${lang}`,
			}),
		}),
	}),
});

export const useGetColors = getColorsApi.useGetColorsQuery;
