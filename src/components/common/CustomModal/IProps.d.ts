export interface IProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  message: string;
}
