import { Context, Callback, APIGatewayProxyEvent } from 'aws-lambda';
import * as Responses from '../../utils/commonResponses';
import User from '../../dynamo/users';

export default async (event: APIGatewayProxyEvent, context: Context, callback: Callback) => {
  const users: any[] = await User.query().exec();

  return Responses.ok200(users);
}
