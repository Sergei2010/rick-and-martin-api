import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants';

type MetaDetails = {
  count: number;
  next: string;
  pages: number;
  prev: null | number;
};

type AllCharactersResponse = {
  info: MetaDetails;
  results: Character[];
};

export const charactersApi = createApi({
  reducerPath: 'chractersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<Character[], void>({
      query: () => '/character',
      transformResponse(data: AllCharactersResponse) {
        console.log(data, 9999);
        return data.results;
      },
    }),
    getCharacterById: builder.query<Character, number>({
      query: (id) => `/character/${id}`,
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } = charactersApi;
