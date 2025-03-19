import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceProviderDto } from './create-serviceprovider.dto';

export class UpdateServiceProviderDto extends PartialType(CreateServiceProviderDto) {}