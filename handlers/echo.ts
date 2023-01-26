import { Context, Callback, APIGatewayProxyEvent } from 'aws-lambda';

export default async (event: APIGatewayProxyEvent, context: Context, callback: Callback) => {
    const a = context;
  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify("ping"),
    isBase64Encoded: false,
  }
}
