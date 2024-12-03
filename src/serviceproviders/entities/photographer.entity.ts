import { Column, Entity } from "typeorm";
import { Serviceprovider } from "./serviceprovider.entity";


@Entity('photographer')
export class PhotoGrapher extends Serviceprovider {}