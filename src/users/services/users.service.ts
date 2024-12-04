import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { ServiceProvider } from 'src/serviceproviders/entities/serviceprovider.entity';
import { Role } from 'src/utils/user-roles.enum';
import { Service } from 'src/services/entities/service.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(ServiceProvider) private servicesProvidersRepository: Repository<ServiceProvider>,
    @InjectRepository(Service) private servicesRepository: Repository<Service>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      
      if (createUserDto.role === Role.SERVICE_PROVIDER) {
        const {services, ...data}=createUserDto
        const serviceProvider = this.servicesProvidersRepository.create(data);
        await this.servicesProvidersRepository.save(serviceProvider);

        const serviceEntities = services.map((serviceName) =>
          this.servicesRepository.create({
            title:serviceName,
            description:'',
            price: 0,
            serviceProvider,
          }),
        )
        await this.servicesRepository.save(serviceEntities)
        return serviceProvider;
      }
      else{
          const newUser = this.usersRepository.create(createUserDto);
          await this.usersRepository.save(newUser);
          return newUser
          
         } 
      
    } catch (error) {
      console.log(error.message)
      
    }
  }

  async findAll() {
    const servicesProviders = await this.servicesProvidersRepository.find();
    return servicesProviders;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
