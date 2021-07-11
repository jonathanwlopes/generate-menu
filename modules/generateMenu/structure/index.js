import { apiCrud } from "../api/index.js";
import { Element } from "../Element/index.js";

export const generateMenu = ({ id }) => {
  if (!id)
    console.error(
      "Erro: Envie como parâmetro o id do elemento que vai receber o menu. * {id: 'exemplo'}"
    );

  structure({ divMaster: id });
};

export const structure = async ({ divMaster }) => {
  const $root = document.querySelector(`#${divMaster}`);
  const departments = await apiCrud.getDepartments();

  const list = Element({
    tag: "ul",
    classList: ["departments"],
  });

  const image = Element({
    tag: "img",
    src: "/images/banner.png",
    alt: "Banner Menu",
    classList: [`${divMaster}__navigation__img`],
  });

  printDepartments({ departments, divMaster: list });

  const navigation = Element({
    tag: "nav",
    classList: [`${divMaster}__navigation`],
  });

  navigation.appendChild(list);
  navigation.appendChild(image);

  $root.appendChild(navigation);
};

export const printDepartments = ({ departments, divMaster }) => {
  for (let department of departments) {
    const item = Element({
      tag: "li",
      classList: ["departments__item"],
    });

    divMaster.appendChild(item);

    const link = Element({
      tag: "span",
      textContent: department.name,
      classList: ["departments--title"],
    });

    item.appendChild(link);

    if (department.children) {
      const list = Element({
        tag: "ul",
        classList: ["departments__sub-departments"],
      });

      item.appendChild(list);

      printSubDepartments({
        subDepartments: department.children,
        divMaster: list,
      });
    }
  }
};

export const printSubDepartments = ({ subDepartments, divMaster }) => {
  for (let subDepartment of subDepartments) {
    const item = Element({
      tag: "li",
      classList: ["departments__sub-departments__item"],
    });

    divMaster.appendChild(item);

    const link = Element({
      tag: "a",
      textContent: subDepartment.name,
      href: subDepartment.link,
      classList: ["departments--title"],
    });

    item.appendChild(link);

    if (subDepartment.children) {
      const list = Element({
        tag: "ul",
        classList: ["departments__categories"],
      });
      item.appendChild(list);

      printCategories({ categories: subDepartment.children, divMaster: list });
    }
  }
};

export const printCategories = ({ categories, divMaster }) => {
  for (let category of categories) {
    const item = Element({
      tag: "li",
      classList: ["departments__categories__item"],
    });
    divMaster.appendChild(item);

    const link = Element({
      tag: "a",
      textContent: category.name,
      href: category.link,
      classList: ["departments--title"],
    });

    item.appendChild(link);
  }
};
