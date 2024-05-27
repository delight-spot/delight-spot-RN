import {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';

export type ErrorStatus = {statusCode: number; errorMessage: string};

type UseMutationCustomOptions<TData = unknown, TVariants = unknown> = Omit<
  UseMutationOptions<TData, ErrorStatus, TVariants, unknown>,
  'mutationFn'
>;

type UseQueryCustomOption<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ErrorStatus, TData, QueryKey>,
  'queryKey'
>;

export type {UseQueryCustomOption, UseMutationCustomOptions};
