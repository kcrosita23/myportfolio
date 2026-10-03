export function validateContact({ name, email, message }) {
  const errors = {};
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  if (!trimmedName) errors.name = "Please enter your name.";
  else if (trimmedName.length < 2 || trimmedName.length > 50) errors.name = "Use 2–50 characters for your name.";
  if (!trimmedEmail) errors.email = "Please enter your email address.";
  else if (trimmedEmail.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) errors.email = "Please enter a valid email address.";
  if (!trimmedMessage) errors.message = "Please enter a message.";
  else if (trimmedMessage.length < 10 || trimmedMessage.length > 1000) errors.message = "Use 10–1,000 characters for your message.";
  return errors;
}
