import MUser from '../../../models/MUser';

export interface IProps {
  register: any;
  errors: any;
  setValue: any;
  user: MUser | undefined;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  createUser: (data: ICreateUser) => Promise<void>;
  editUser: (data: IUpdateUser) => Promise<void>;
  validateTitle: (value: string) => boolean | string;
}
