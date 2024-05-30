import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pokemon } from '../../dataTypes/pokemonType';
import { BaseResponse } from '../../dataTypes/pokemonListType';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    // Pokemon List query
    getPokemonList: builder.query<BaseResponse, void>({
      query: () => 'pokemon',
    }),
    // Pojemon Details query by id
    getPokemonById: builder.query<pokemon, String>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});
export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonApi;
