const truncateText = (string, nwords) => {
  return string.length > nwords ? string.slice(0, nwords - 1) + "..." : string;
};

export { truncateText };
