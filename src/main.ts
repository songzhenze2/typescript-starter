import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Swagger example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('Swagger')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'csrf-token',
        description: 'this is csrf-token in header',
      },
      'csrf-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
