export interface IProps {
  register: any;
  errors: any;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  createUser: (data: ICreateUser) => Promise<void>;
  validateTitle: (value: string) => boolean | string;

}
