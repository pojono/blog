import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as config from 'config';
import HTTP_CODE_DESCRIPTION from './http.description';
import * as ERRORS from './lib/errors';
import { AllExceptionsFilter } from './lib/all.exception.filter';
import { Telegram } from './lib/telegram';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);
  const scheme: 'http' | 'https' = config.get('swagger.scheme');
  if (config.get('swagger.enable')) {
    const errors = Object.keys(ERRORS).reduce(
      (allText, currentError) =>
        allText +
        `${ERRORS[currentError].getCode()}. ${ERRORS[
          currentError
        ].getMessage()} \n`,
      '',
    );
    const options = new DocumentBuilder()
      .setTitle('ProstoApp')
      .addBearerAuth()
      .addTag('users', 'TODO: изменить роуты на мн. число')
      .addTag('rubrics', 'Все рубрики и страница конкретной рубрики')
      .addTag('main', 'Главная страница приложения')
      .addTag('courses', 'Курсы')
      .addTag('lessons', 'Занятия в курсе')
      .addTag('fast_support', 'Быстрая помощь')
      .addTag('statistics', 'Статистика по приложению')
      .addTag('quizzes', 'Диалоги в псевдо-мессенджере')
      .addTag('events', 'Ивенты о происходящем в приложении')
      .addTag('root', 'Системная информация о сервере')
      .setDescription(
        'Server started at: ' +
          new Date().toISOString() +
          ' (UTC) \n' +
          HTTP_CODE_DESCRIPTION +
          ' \n ``` \n' +
          errors +
          '```',
      )
      .setVersion(process.env.TAG || 'PLEASE SET ENV TAG')
      .setSchemes(scheme)
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(config.get('swagger.path'), app, document);
  }

  const port: number = Number(process.env.PORT) || config.get('server.port');
  app.enableCors();
  // app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(port);

  const startMessage: string = `App started port: ${port} env: ${process.env.NODE_ENV} build: ${process.env.TAG}`;

  logger.log(startMessage);

  try {
    if (process.env.NODE_ENV !== 'development') {
      await Telegram.sendMessage(startMessage);
    }
  } catch (err) {
    logger.error(JSON.stringify(err));
  }
}

(async () => {
  await bootstrap();
})();
