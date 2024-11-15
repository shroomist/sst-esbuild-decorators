import { APIGatewayEvent } from "aws-lambda";
import {C} from './decorator'

export const handler = async (event: APIGatewayEvent) => {
  const a = new C()
  const b = a.m()
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'hello', b })
  }
}
