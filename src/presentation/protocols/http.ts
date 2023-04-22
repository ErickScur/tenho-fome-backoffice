export interface HttpRequest {
  body?: any
  params?: any
  headers?: any
  middleware?: any
}

export interface HttpResponse {
  statusCode: number
  body?: any
}
