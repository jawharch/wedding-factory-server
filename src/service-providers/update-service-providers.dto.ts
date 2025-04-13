import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceProvidersDto } from './create-service-providers.dto';

export class UpdateServiceProvidersDto extends PartialType(CreateServiceProvidersDto) {}