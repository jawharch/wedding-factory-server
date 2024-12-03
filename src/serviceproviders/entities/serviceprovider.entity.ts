import { Service } from "src/services/entities/service.entity";
import { User } from "src/users/entities/user.entity";
import { Category } from "src/utils/category.enum";
import { Role } from "src/utils/user-roles.enum";

import { Column, Entity, OneToMany } from "typeorm";
@Entity('service_provider')
export class Serviceprovider extends User {

 
    @Column({ type: 'enum', enum: Role, default:Role.SERVICE_PROVIDER})
     role: Role

    @Column()
     businessName: string 

    @Column()
     address: string;

    @Column()
     city: string;

    @Column()
     description: string ;

    @Column()
     viewCounts: number;

    @Column()
     socialMediaLinks: string[];

    @Column()
     workingHours: string[];
     
    @Column({ type: 'enum', enum: Category})
     category: Category;
    
    @OneToMany(() => Service, (service) => service.serviceProvider, { cascade: true })
     services: Service[]; 
     








}
