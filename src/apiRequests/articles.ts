import http from '@/lib/http'

const articlesApiRequest = {
  getList: (category: string) => http.get<any>(`/${category}.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`),

}

export default articlesApiRequest
