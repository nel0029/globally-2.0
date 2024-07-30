const validateFormValues = (values: {
  [key: string]: {
    value: string | number;
    required: boolean;
    validate: (
      value: string | number,
      errorMessage: string
    ) => {
      errorMessage: string;
    };
  };
}) => {};
