import { Column, Entity } from "typeorm";
import { ServiceProvider } from "./serviceprovider.entity";


@Entity('photographer')
export class PhotoGrapher extends ServiceProvider {}