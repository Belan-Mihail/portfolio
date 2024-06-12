import { useQuery } from '@tanstack/react-query'
import apiClient from '../apiClient'
import PortfolioDataType from '../types/PortfolioDataType'


export const useGetProjectsQuery = () =>
  
  useQuery({
    queryKey: ['projects'],
    queryFn: async () => (
      
      await apiClient.get<PortfolioDataType[]>(`api/projects`)).data,
  })

  export const useGetProjectDetailsBySlugQuery = (slug: string) =>
    useQuery({
      queryKey: ['projects', slug],
      queryFn: async () =>
        (await apiClient.get<PortfolioDataType>(`api/projects/${slug}`)).data,
    })