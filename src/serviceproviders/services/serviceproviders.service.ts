import { Injectable } from '@nestjs/common';
import { CreateServiceproviderDto } from '../dto/create-serviceprovider.dto';
import { UpdateServiceproviderDto } from '../dto/update-serviceprovider.dto';


@Injectable()
export class ServiceprovidersService {
  create(createServiceproviderDto: CreateServiceproviderDto) {
    return 'This action adds a new serviceprovider';
  }

  findAll() {
    return `This action returns all serviceproviders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceprovider`;
  }

  update(id: number, UpdateServiceproviderDto: UpdateServiceproviderDto) {
    return `This action updates a #${id} serviceprovider`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceprovider`;
  }
}
