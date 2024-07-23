import { IPropertyBase } from './ipropertybase';

export class Property implements IPropertyBase {
  Id!: number;
  SellRent!: number;
  Name!: string;
  PType!: string;
  BHK!: number;
  FType!: string;
  Price!: number;
  BuiltArea!: number;
  CarpetArea?: number;
  Address!: string;
  Address2?: string;
  City!: string;
  FloorNo?: number;
  TotalFloor?: number;
  RTM!: number;
  AOP?: number;
  Maintenance?: number;
  Security?: number;
  Gated?: number;
  MainEntrance?: string;
  Description?: string;
  Image?: string;
  PostedOn!: string;
  PostedBy!: number;
  Possession?: string;
}
