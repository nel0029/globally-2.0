import { CustomTextArea } from "./style";

interface Props {
  value: string;
  placeholder?: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CreateNewPostTextArea = ({
  value,
  onChange,
  placeholder,
  maxLength,
}: Props) => {
  const handleTextAreaRows = () => {
    const contentLines = value.split("\n");

    if (contentLines.length === 1) {
      return 1;
    }

    if (contentLines.length <= 10) {
      return contentLines.length;
    }

    return 10;
  };
  return (
    <CustomTextArea
      placeholder={placeholder}
      maxLength={maxLength}
      rows={handleTextAreaRows()}
      onChange={onChange}
      value={value}
    />
  );
};

export default CreateNewPostTextArea;
