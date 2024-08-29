import { CreateNewPostButton } from "./style";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const CreatePostButton = ({ label, ...rest }: Props) => {
  return <CreateNewPostButton {...rest}>{label}</CreateNewPostButton>;
};

export default CreatePostButton;
