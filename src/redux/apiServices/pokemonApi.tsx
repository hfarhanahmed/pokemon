import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    // Pokemon List query
    getPokemonList: builder.query({
      query: () => 'pokemon',
    }),
    // Pojemon Details query by id
    getPokemonById: builder.query({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});
export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonApi;
