import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './modules/cat/cat.module';
import { DogModule } from './modules/dog/dog.module';

@Module({
  imports: [DogModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
