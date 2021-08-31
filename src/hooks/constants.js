export const transformQueryArray = (position, data) => [{ label: `Bookmark Nº ${position}`, item: data, id: { position } }];

export const localStorageQueryKey = 'queryData';
