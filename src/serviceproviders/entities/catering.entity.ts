import { Column, Entity } from "typeorm";
import { ServiceProvider } from "./serviceprovider.entity";


@Entity('catering')
export class Catering extends ServiceProvider {

    @Column()
    capacity: string;


}