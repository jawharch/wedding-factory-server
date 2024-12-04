import { Column, Entity } from "typeorm";
import { ServiceProvider } from "./serviceprovider.entity";
import { weddingPlace } from "src/utils/weddingplace.enum";

@Entity('wedding_place')
export class WeddingPlace extends ServiceProvider {

     @Column()
     capacity: number
     
     @Column({ type: 'enum', enum: WeddingPlace})
     type: weddingPlace

}