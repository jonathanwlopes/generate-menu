export const dbMenu = {
  departments: [
    {
      name: "Mercearia",
      link: "/mercearia",
      subDepartment: [
        {
          name: "Azeite",
          link: "/mercearia/azeite",
          category: [
            { name: "Oliva", link: "/mercearia/azeite/oliva" },
            { name: "Refinado", link: "/mercearia/azeite/refinado" },
            { name: "Composto", link: "/mercearia/azeite/composto" },
            { name: "Dendê", link: "/mercearia/azeite/dende" },
          ],
        },
        {
          name: "Vinagre",
          link: "/mercearia/vinagre",
          category: [
            { name: "Aromatizado", link: "/mercearia/vinagre/aromatizado" },
            { name: "Orgânico", link: "/mercearia/vinagre/organico" },
          ],
        },
        {
          name: "Mel",
          link: "/mercearia/mel",
        },
      ],
    },
    {
      name: "Frutas",
      link: "/frutas",
      subDepartment: [
        {
          name: "Abacate",
          link: "/mercearia/abacate",
          category: [
            { name: "Mexicano", link: "/mercearia/abacate/mexicano" },
            { name: "Tropical", link: "/mercearia/abacate/tropical" },
          ],
        },
        {
          name: "Abacaxi",
          link: "/mercearia/abacaxi",
          category: [
            { name: "Pérola", link: "/mercearia/abacaxi/perola" },
            { name: "Imperial", link: "/mercearia/abacaxi/imperial" },
          ],
        },
        {
          name: "Banana",
          link: "/mercearia/banana",
          category: [
            { name: "Prata", link: "/mercearia/banana/prata" },
            { name: "Nanica", link: "/mercearia/banana/nanica" },
            { name: "Ouro", link: "/mercearia/banana/ouro" },
          ],
        },
      ],
    },
    {
      name: "Produtos Naturais",
      link: "/produtos-naturais",
    },
  ],

  getDepartments: () => {
    return [...dbMenu.departments];
  },
};
