import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Injectable()
export class DashboardService {
  create(createDashboardDto: CreateDashboardDto) {
    return {
      email: createDashboardDto.email,
      password: createDashboardDto.password,
      status: 'success',
    };
  }

  findAll() {
    return {
      email : 'test@mea.or.th',
      status : 'success'
    };
  }

  findOne(id: number) {
    return {
      id: id,
      email : 'test@mea.or.th',
      status : 'success'
    }
  }

  update(id: number, updateDashboardDto: UpdateDashboardDto) {
    return `This action updates a #${id} dashboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboard`;
  }
}
