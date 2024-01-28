/* eslint-disable */
import type { Prisma, Post } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreatePost(
    options?: Omit<UseMutationOptions<Post | undefined, unknown, Prisma.PostCreateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PostCreateArgs, Post, true>(
        'Post',
        'POST',
        `${endpoint}/post/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PostCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.PostCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Post, Prisma.PostGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PostCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Post, Prisma.PostGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyPost(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.PostCreateManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PostCreateManyArgs, Prisma.BatchPayload, false>(
        'Post',
        'POST',
        `${endpoint}/post/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PostCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.PostCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PostCreateManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyPost<T extends Prisma.PostFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.PostGetPayload<T> & { $optimistic?: boolean }>>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Post', `${endpoint}/post/findMany`, args, options, fetch, optimisticUpdate);
}

export function useInfiniteFindManyPost<T extends Prisma.PostFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.PostGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('Post', `${endpoint}/post/findMany`, args, options, fetch);
}

export function useFindUniquePost<T extends Prisma.PostFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.PostGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Post', `${endpoint}/post/findUnique`, args, options, fetch, optimisticUpdate);
}

export function useFindFirstPost<T extends Prisma.PostFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PostFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.PostGetPayload<T> & { $optimistic?: boolean }>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Post', `${endpoint}/post/findFirst`, args, options, fetch, optimisticUpdate);
}

export function useUpdatePost(
    options?: Omit<UseMutationOptions<Post | undefined, unknown, Prisma.PostUpdateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PostUpdateArgs, Post, true>(
        'Post',
        'PUT',
        `${endpoint}/post/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PostUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Post, Prisma.PostGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PostUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Post, Prisma.PostGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyPost(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.PostUpdateManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PostUpdateManyArgs, Prisma.BatchPayload, false>(
        'Post',
        'PUT',
        `${endpoint}/post/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PostUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.PostUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PostUpdateManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertPost(
    options?: Omit<UseMutationOptions<Post | undefined, unknown, Prisma.PostUpsertArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PostUpsertArgs, Post, true>(
        'Post',
        'POST',
        `${endpoint}/post/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PostUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.PostUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Post, Prisma.PostGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PostUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Post, Prisma.PostGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeletePost(
    options?: Omit<UseMutationOptions<Post | undefined, unknown, Prisma.PostDeleteArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PostDeleteArgs, Post, true>(
        'Post',
        'DELETE',
        `${endpoint}/post/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PostDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.PostDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Post, Prisma.PostGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PostDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Post, Prisma.PostGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyPost(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.PostDeleteManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.PostDeleteManyArgs, Prisma.BatchPayload, false>(
        'Post',
        'DELETE',
        `${endpoint}/post/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.PostDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.PostDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.PostDeleteManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregatePost<T extends Prisma.PostAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetPostAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Post', `${endpoint}/post/aggregate`, args, options, fetch);
}

export function useGroupByPost<
    T extends Prisma.PostGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PostGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.PostGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
                [P in HavingFields]: P extends ByFields
                    ? never
                    : P extends string
                      ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                      : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
                ? ByValid extends Prisma.True
                    ? {}
                    : {
                          [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields]
                : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
              ? 'orderBy' extends Prisma.Keys<T>
                  ? ByValid extends Prisma.True
                      ? {}
                      : {
                            [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                  : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
>(
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.PostGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.PostGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.PostGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.PostGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.PostGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Post', `${endpoint}/post/groupBy`, args, options, fetch);
}

export function useCountPost<T extends Prisma.PostCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PostCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PostCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Post', `${endpoint}/post/count`, args, options, fetch);
}
