export const validateEmail = (
  form: { [key: string]: string },
  setFormError: (val: any) => void
) => {
  let isValid = true;
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!form.email) {
    setFormError((prev: { [key: string]: string }) => ({
      ...prev,
      email: "Email is required",
    }));
    isValid = false;
    return { isValid };
  }

  if (!emailPattern.test(form.email)) {
    setFormError((prev: { [key: string]: string }) => ({
      ...prev,
      email: "Invalid email format",
    }));
    isValid = false;
    return { isValid };
  }

  setFormError((prev: { [key: string]: string }) => ({ ...prev, email: "" }));

  return { isValid };
};

export const validateUserName = (
  form: { [key: string]: string },
  setFormError: (val: any) => void
) => {
  let isValid = true;
  const userNamePattern = /^[a-zA-Z0-9_]+$/;

  if (!form.user_name) {
    setFormError((prev: { [key: string]: string }) => ({
      ...prev,
      user_name: "Username is required",
    }));
    isValid = false;
    return { isValid };
  }

  if (form.user_name.length < 6) {
    setFormError((prev: { [key: string]: string }) => ({
      ...prev,
      user_name: "Username must be at least 6 characters long",
    }));
    isValid = false;
    return { isValid };
  }

  if (form.user_name.length > 10) {
    setFormError((prev: { [key: string]: string }) => ({
      ...prev,
      user_name: "Username is too long",
    }));
    isValid = false;
    return { isValid };
  }

  if (!userNamePattern.test(form.user_name)) {
    setFormError((prev: { [key: string]: string }) => ({
      ...prev,
      user_name:
        "Username can only contain alphanumeric characters, underscores, and no spaces",
    }));
    isValid = false;
    return { isValid };
  }

  setFormError((prev: { [key: string]: string }) => ({
    ...prev,
    user_name: "",
  }));

  return { isValid };
};

export const validatePassword = (
  form: { [key: string]: string },
  setFormError: (val: any) => void
) => {
  let isValid = true;
  const passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+={}\[\]|\\:;'",.<>?/`~\-]*$/;

  if (!form.password) {
    setFormError((prev: { [key: string]: string }) => ({
      ...prev,
      password: "Password is required",
    }));
    isValid = false;
    return { isValid };
  }

  if (form.password.length < 6) {
    setFormError((prev: { [key: string]: string }) => ({
      ...prev,
      password: "Password must be at least 6 characters long",
    }));
    isValid = false;
    return { isValid };
  }

  if (!passwordPattern.test(form.password)) {
    setFormError((prev: { [key: string]: string }) => ({
      ...prev,
      password: "Password can only contain alphanumeric characters and symbols",
    }));
    isValid = false;
    return { isValid };
  }

  setFormError((prev: { [key: string]: string }) => ({
    ...prev,
    password: "",
  }));

  return { isValid };
};

export const validateName = (
  form: { [key: string]: string },
  setFormError: (val: any) => void
) => {
  let isValid = true;
  const startsWithSpacePattern = /^\s/;
  const endsWithSpacePattern = /(\s)$/;
  if (!form.name) {
    setFormError((prev: { [key: string]: string }) => ({
      ...prev,
      name: "Name is required",
    }));
    isValid = false;
    return { isValid };
  }

  if (
    startsWithSpacePattern.test(form.name) ||
    endsWithSpacePattern.test(form.name)
  ) {
    setFormError((prev: { [key: string]: string }) => ({
      ...prev,
      name: "Invalid name format",
    }));
    isValid = false;
    return { isValid };
  }

  return { isValid };
};
