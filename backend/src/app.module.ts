import { Module } from '@nestjs/common';
import { RecipeModule } from './recipe/recipe.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    RecipeModule
  ]
})
export class AppModule { }
