export interface iValidationMessages {
  name: {
    required: string;
    invalidName: string;
  };
  email: {
    required: string;
    email: string;
  };
  phone: {
    required: string;
    minlength: string;
    maxlength: string;
  };
}
