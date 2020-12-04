import { StandardRestApiError } from './standard.rest.api.error';

// STATUS CODE 400 IS RESERVED FOR VALIDATION

export const INVALID_CREDENTIALS: StandardRestApiError = StandardRestApiError.create(
  1001,
  'Invalid credentials',
);

export const AMAZON_COGNITO_ERROR: StandardRestApiError = StandardRestApiError.create(
  1002,
  'Amazon Cognito Error',
);

export const SMS_TOO_OFTEN: StandardRestApiError = StandardRestApiError.create(
  1003,
  'Sms request too often',
);

export const OBJECT_NOT_FOUND: StandardRestApiError = StandardRestApiError.create(
  1004,
  'Object not found',
);

export const BEGINNER_COURSE_NOT_FOUND: StandardRestApiError = StandardRestApiError.create(
  1005,
  'Beginner course not found',
);

export const PURCHASE_VALIDATION_ERROR: StandardRestApiError = StandardRestApiError.create(
  1006,
  'Purchase validation error',
);

export const SUBSCRIPRITON_IS_EXPIRED: StandardRestApiError = StandardRestApiError.create(
  1007,
  'Subscription is expired',
);

export const SUBSCRIPRITON_IS_CANCELLED: StandardRestApiError = StandardRestApiError.create(
  1008,
  'Subscription is cancelled',
);

export const PHOTO_NOT_FOUND: StandardRestApiError = StandardRestApiError.create(
  1009,
  'Photo not found',
);

export const UPLOAD_ERROR: StandardRestApiError = StandardRestApiError.create(
  1010,
  'Upload error',
);

export const EXTENSION_ERROR: StandardRestApiError = StandardRestApiError.create(
  1011,
  'Extension error',
);

export const TOKEN_ERROR: StandardRestApiError = StandardRestApiError.create(
  1012,
  'Token error',
);

export const PROMOCODE_ALREADY_USED: StandardRestApiError = StandardRestApiError.create(
  1013,
  'Promocode already used',
);

export const PROMOCODE_NOT_FOUND: StandardRestApiError = StandardRestApiError.create(
  1014,
  'Promocode not found',
);

export const PROMOCODE_PAYMENT_NOT_FOUND: StandardRestApiError = StandardRestApiError.create(
  1015,
  'Promocode payment ot found',
);
