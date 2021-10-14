import { Context, Callback, APIGatewayProxyEvent } from 'aws-lambda';
import * as Responses from '../utils/commonResponses';

export default async (event: APIGatewayProxyEvent, context: Context, callback: Callback) => {

  return Responses.ok200({ message: 'Hello World!' });
}
