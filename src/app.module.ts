import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RecordsController } from './records/records.controller';

@Module({
  imports: [],
  controllers: [AppController, RecordsController],
  providers: [AppService], // Make sure RecordService is only imported once
})
export class AppModule {}
