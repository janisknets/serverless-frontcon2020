
import { APIGatewayProxyResult } from 'aws-lambda'

export const internalError: (errorMesage: string) => APIGatewayProxyResult = (errorMessage) => ({
  statusCode: 500,
  headers: {},
  body: JSON.stringify({
    message: errorMessage,
  }),
  isBase64Encoded: false,
})

export const invalidRequest: (errorMesage: string) => APIGatewayProxyResult = (errorMessage) => ({
  statusCode: 400,
  headers: {},
  body: JSON.stringify({
    message: errorMessage,
  }),
  isBase64Encoded: false,
})

export const notImplemented: APIGatewayProxyResult = {
  statusCode: 501,
  headers: {},
  body: "Not implemented",
  isBase64Encoded: false
};

export const ok200: (body: any) => APIGatewayProxyResult = (body) => {
  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify(body),
    isBase64Encoded: false,
  }
}
