import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '../../constants';
import { setPage, setTotalCount } from '../slices/filter';
import { RootState } from '../store';
export const charactersApi = createApi( {
  reducerPath: 'chractersApi',
  baseQuery: fetchBaseQuery( { baseUrl: API_URL } ),

  endpoints: ( builder ) => ( {
    getAllCharacters: builder.query<ResponseDetails<Character[]>, void>( {
      queryFn: async ( arg, queryApi, extraOptions, baseQuery ) => {
        const state = queryApi.getState();
        const { searchValue, page, totalCount } = ( state as RootState ).filter;
        const response = ( await baseQuery( `/character?name=${ searchValue }&page=${ page }` ) ) as any;

        //console.log( 'response:', response );
        if ( response.data && response.data.info.count !== totalCount ) {
          queryApi.dispatch( setTotalCount( response.data.info.count ) );
          queryApi.dispatch( setPage( 1 ) );
        }

        return response;
      },
    } ),

    getCharacterById: builder.query<Character, number>( {
      query: ( id ) => `/character/${ id }`,
    } ),
  } ),
} );
//console.log('charactersApi:', charactersApi);
export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } = charactersApi;
