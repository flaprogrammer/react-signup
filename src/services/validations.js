export function required(value) {
  if (!value) {
    return 'Field is required'
  }
}

export function cleanText(value) {
  const CLEAN_TEXT = /^[^`~!@#$%^&*()+=[{\]}|\\'<,.>?";:]+$/;
  if (!CLEAN_TEXT.test(value)) {
    return 'No special characters allowed'
  }
}

export function minLength(value, length) {
  if (value.length < length) {
    return `Min length have to be ${length}`;
  }
}

export function email(value) {
  const EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!EMAIL.test(value)) {
    return 'Invalid email address'
  }
}

export function passwordsMatch(value, valueToEqual) {
  if (value !== valueToEqual) {
    return 'Passwords does not match'
  }
}
