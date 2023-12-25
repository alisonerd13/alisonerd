export interface IAPIResponseCore {
  metadata: {
    [key: string]: unknown
  }
  message: string | null
  success: boolean
}

export interface IAPIResponse<T> extends IAPIResponseCore {
  data: T
}

export interface IAPIErrorResponse extends IAPIResponseCore {
  meta: {
    isSkip: boolean
    [key: string]: unknown
  }
}
