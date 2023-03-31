import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';
import {GqlThrottlerGuard} from "./throttler.guard";

@Module({
  providers: [RecipesResolver, RecipesService, DateScalar, GqlThrottlerGuard],
})
export class RecipesModule {}
