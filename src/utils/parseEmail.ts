const parseEmail = (email: string) => {
  const emailRegex = /^(.*?)(?:\s*<([^>]+)>)?$/;

  const match = email.match(emailRegex);

  if (match) {
    const name = match[1].trim();
    const email = match[2] ? match[2].trim() : name;

    return {
      name: match[2] ? name : undefined,
      email,
    };
  }

  return {
    name: undefined,
    email,
  };
};

export { parseEmail };
