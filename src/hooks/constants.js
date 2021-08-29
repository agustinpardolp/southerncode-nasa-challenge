export const transformQueryArray = (position, data) => {
  return [{ label: `Bookmark Nº ${position}`, item: data, id: { position } }];
};
