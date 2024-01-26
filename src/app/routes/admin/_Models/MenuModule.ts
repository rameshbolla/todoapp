export interface MenuModule {
  id?: number;
  route?: string;
  name?: string;
  type?: string;
  displayIcon?: string;
  badgeColor?: string;
  badgeValue?: string;
  labelColor?: string;
  labelValue?: string;
  description?: string;
  isActive?: boolean;
  createdOn?: Date;
  createdBy?: string;
  modifiedOn?: Date;
  modifiedBy?: string;
}
