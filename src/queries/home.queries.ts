import { useQuery, useMutation } from '@tanstack/react-query'
import { api } from '@/utils/axios'

export function useHotelData() {
  return useQuery({
    queryKey: ['hotel'],
    queryFn: () => api.get('/hotel').then((r) => r.data),
  })
}

export function useSubmitBooking() {
  return useMutation({
    mutationFn: (data: Record<string, unknown>) =>
      api.post('/booking', data).then((r) => r.data),
  })
}
