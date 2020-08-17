import { Context, Callback, APIGatewayProxyEvent } from 'aws-lambda';
import * as Responses from '../../utils/commonResponses';
import User from '../../dynamo/users';

export default async (event: APIGatewayProxyEvent, context: Context, callback: Callback) => {

  try {
    const parsedBody = JSON.parse(event.body);

    const user: any = await User.create(parsedBody);

    return Responses.ok200({ user });
  } catch (error) {
    console.error(error);
    return Responses.internalError(error);
  }
}
