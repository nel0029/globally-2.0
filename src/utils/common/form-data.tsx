export const toFormData = (body: Record<string, any>): FormData => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(body)) {
    if (value instanceof File) {
      formData.append(key, value);
    } else {
      formData.append(key, value.toString());
    }
  }

  return formData;
};
