export const truncate = (
  str: string,
  length: number,
): string => {
  if (!str || str.length <= length) { return str; };
  return `${str.slice(0, length - 3)}${"..."}`;
};
