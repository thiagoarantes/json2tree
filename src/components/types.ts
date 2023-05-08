interface basicProps {
  value: string;
}

export interface JSONInputProps extends basicProps {
  updateJSONValue: (value: string) => void;
}

export interface TreeViewProps extends basicProps {}

export interface TreeViewItemProps {
  title?: string;
  content: any;
  format: string;
}
