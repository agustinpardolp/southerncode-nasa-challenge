export const cameraModels = [
  { label: "fhaz", value: "fhaz", id: 1 },
  { label: "rhaz", value: "rhaz", id: 2 },
  { label: "mast", value: "mast", id: 3 },
  { label: "chemcam", value: "chemcam", id: 4 },
  { label: "mahali", value: "mahali", id: 5 },
  { label: "mardi", value: "mardi", id: 6 },
  { label: "navcam", value: "navcam", id: 7 },
  { label: "pancam", value: "pancam", id: 8 },
  { label: "minites", value: "minites", id: 9 },
];

export const queryKeys = {
  earthDate: "earthDate",
  sol: "sol",
  camera: "camera",
  pagination: "pagination",
};

export const queryValues = {
  earthDate: {
    key: "date",
    query: "&earth_date=",
  },
  sol: {
    key: "date",
    query: "&sol=",
  },
  camera: {
    key: "camera",
    query: "&camera=",
  },
  pagination: {
    key: "page",
    query: "&page=",
  },
};
