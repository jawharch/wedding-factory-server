import { Column, Entity } from "typeorm";
import { Serviceprovider } from "./serviceprovider.entity";
import { weddingPlace } from "src/utils/weddingplace.enum";

@Entity('wedding_place')
export class WeddingPlace extends Serviceprovider {

     @Column()
     capacity: number
     
     @Column({ type: 'enum', enum: WeddingPlace})
     type: weddingPlace

}