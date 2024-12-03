import { Column, Entity } from "typeorm";
import { Serviceprovider } from "./serviceprovider.entity";


@Entity('catering')
export class Catering extends Serviceprovider {

    @Column()
    capacity: string;


}