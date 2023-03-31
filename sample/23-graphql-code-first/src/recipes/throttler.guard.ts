import {ExecutionContext, Injectable} from "@nestjs/common";
import {ThrottlerGuard} from "@nestjs/throttler";
import {GqlExecutionContext} from "@nestjs/graphql";

@Injectable()
export class GqlThrottlerGuard extends ThrottlerGuard {
  getRequestResponse(context: ExecutionContext) {
    const gqlCtx = GqlExecutionContext.create(context);
    const ctx = gqlCtx.getContext();
    console.log('custom getRequestResponse is being called')
    return { req: ctx.req, res: ctx.res }; // ctx.request and ctx.reply for fastify
  }
}
