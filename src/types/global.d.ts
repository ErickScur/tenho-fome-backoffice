/* eslint-disable */
declare global {
  namespace Express {
    interface Request {
      middleware?: any
    }
  }
}

export {}
