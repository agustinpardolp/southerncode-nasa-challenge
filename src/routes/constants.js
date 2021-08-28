export const routes = {
  any: "/*",
  rovers: "/rovers",
};

export const route_tabs = [
  { id: 1, name: "Curiosity", route: `${routes.rovers}/curiosity` },
  { id: 2, name: "Opportunity", route: `${routes.rovers}/opportunity` },
  { id: 3, name: "Spirit", route: `${routes.rovers}/spirit` },
];
