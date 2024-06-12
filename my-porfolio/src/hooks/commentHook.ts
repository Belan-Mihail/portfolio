import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import apiClient from '../apiClient'
import { Comment } from '../types/CommentType'


export const useGetCommentsQuery = (slug:string) =>
  useQuery({
    queryKey: ['comments'],
    queryFn: async () => (await apiClient.get<Comment[]>(`api/projects/${slug}/comment`)).data,
  })

  export const useCreateCommentMutation = (slug: string) => {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: async ({
        content,
      }: {
        content: string
      }) =>
        (
          await apiClient.post<Comment>(`api/projects/${slug}/comment`, {
            content,
          })
        ).data,
       onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['comments']})
       }
    })
  }
    export const useUpdateCommentMutation = (slug: string, commentId: string) => {
      const queryClient = useQueryClient()
      return useMutation({
        mutationFn: async ({
          content,
        }: {
          content: string
        }) =>
          (
            await apiClient.put<Comment>(`api/projects/${slug}/comment/${commentId}`, {
              content,
            })
          ).data,
          onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['comments']})
           }
      })}
  
    export const useDeleteCommentMutation = (slug: string, commentId: string) => {
      const queryClient = useQueryClient()
      return useMutation({
        mutationFn: async () =>
          (
            await apiClient.delete<Comment>(`api/projects/${slug}/comment/${commentId}`)
          ),
          onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['comments']})
           }
      })}