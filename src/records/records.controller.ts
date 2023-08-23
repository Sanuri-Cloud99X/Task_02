import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import axios from 'axios';

@Controller('records')
export class RecordsController {
  private readonly jsonServerBaseUrl = 'http://localhost:3001';

  @Get()
  async getAllRecords() {
    const response = await axios.get(`${this.jsonServerBaseUrl}/records`);
    return response.data;
  }

  @Get(':id')
  async getRecordById(@Param('id') id: string) {
    const response = await axios.get(`${this.jsonServerBaseUrl}/records/${id}`);
    return response.data;
  }

  @Post()
  async addOrUpdateRecord(@Body() record: any) {
    if (!record.id) {
      // If record doesn't have an ID, treat it as a new record and add it
      const response = await axios.post(
        `${this.jsonServerBaseUrl}/records`,
        record,
      );
      return response.data;
    } else {
      // If record has an ID, treat it as an update and modify the existing record
      const response = await axios.put(
        `${this.jsonServerBaseUrl}/records/${record.id}`,
        record,
      );
      return response.data;
    }
  }
}
