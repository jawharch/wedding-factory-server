

import { ServiceProvider } from 'src/serviceproviders/entities/serviceprovider.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('service')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToOne(() => ServiceProvider, (serviceProvider) => serviceProvider.services, {
    onDelete: 'CASCADE' })
    @JoinColumn({name:'serviceProviderId'})
    serviceProvider: ServiceProvider;


  

 

}
