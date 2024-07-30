import { FormInput, FormItemWrapper, FormLabel, FormText } from "./style";

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  name: string;
  form: { [key: string]: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

const FormItem = ({
  label,
  type,
  placeholder,
  error,
  name,
  form,
  onChange,
}: FormInputProps) => {
  return (
    <FormItemWrapper $size={5}>
      <FormLabel>
        {`${label} `}
        {error && (
          <FormText $size="xs" $variant="red200" $fontWeight="bold">
            {error}
          </FormText>
        )}
      </FormLabel>
      <FormInput
        type={type}
        placeholder={placeholder}
        $isError={!!error}
        value={form[name]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, name)}
        autoComplete="off"
      />
    </FormItemWrapper>
  );
};

export default FormItem;
