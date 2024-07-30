import { useState } from "react";
import { FormInput, FormItemWrapper, FormLabel, FormText } from "./style";

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormItem = ({
  label,
  type,
  placeholder,
  error,
  value,
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
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </FormItemWrapper>
  );
};

export default FormItem;
