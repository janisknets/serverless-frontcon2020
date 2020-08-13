import { aws, Schema, model } from 'dynamoose';

if (process.env.STAGE === 'local') {
  aws.ddb.local(process.env.DYNAMO_URL);
}

const UserSchema = new Schema({
  "id": { "type": String, required: true, "hashKey": true },
  "name": { "type": String },
  "surname": { "type": String },
  "email": { "type": String },
  "phone": { "type": String },
  "birthday": { "type": Date },
})

if (!process || !process.env || !process.env.USERS_TABLE_NAME) {
  throw new Error('no users table name configured');
}

const User = model(process.env?.USERS_TABLE_NAME, UserSchema);

export default User;
