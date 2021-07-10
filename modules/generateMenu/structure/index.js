import { dbMenu } from "../db/index.js";
import { Element } from "../Element/index.js";

export const generateMenu = ({ id }) => {
  if (!id)
    console.error(
      "Erro: Envie como parâmetro o id do elemento que vai receber o menu. * {id: 'exemplo'}"
    );

  structure({ divMaster: id });
};

export const structure = ({ divMaster }) => {
  const $root = document.querySelector(`#${divMaster}`);
  const departments = dbMenu.getDepartments();

  const _list = Element({
    tag: "ul",
    classList: ["departments"],
  });
  printDepartments({ departments, divMaster: _list });

  const _navigation = Element({
    tag: "nav",
    classList: [`${divMaster}__navigation`],
  });

  _navigation.appendChild(_list);

  $root.appendChild(_navigation);
};

export const printDepartments = ({ departments, divMaster }) => {
  for (let department of departments) {
    const _item = Element({
      tag: "li",
      classList: ["departments__item"],
    });

    divMaster.appendChild(_item);

    const _link = Element({
      tag: "span",
      textContent: department.name,
      classList: ["departments__item--title"],
    });

    _item.appendChild(_link);

    if (department.subDepartment) {
      const _list = Element({
        tag: "ul",
        classList: ["departments__sub-departments"],
      });

      _item.appendChild(_list);

      printSubDepartments({
        subDepartments: department.subDepartment,
        divMaster: _list,
      });
    }
  }
};

export const printSubDepartments = ({ subDepartments, divMaster }) => {
  for (let subDepartment of subDepartments) {
    const _item = Element({
      tag: "li",
      classList: ["departments__sub-departments--item"],
    });

    divMaster.appendChild(_item);

    const _link = Element({
      tag: "a",
      textContent: subDepartment.name,
      href: subDepartment.link,
      classList: ["sub-departments__link"],
    });

    _item.appendChild(_link);

    if (subDepartment.category) {
      const _list = Element({ tag: "ul", classList: ["departments__categories"] });
      _item.appendChild(_list);

      printCategories({ categories: subDepartment.category, divMaster: _list });
    }
  }
};

export const printCategories = ({ categories, divMaster }) => {
  for (let category of categories) {
    const _item = Element({ tag: "li", classList: ["categories__item"] });
    divMaster.appendChild(_item);

    const _link = Element({
      tag: "a",
      textContent: category.name,
      href: category.link,
      classList: ["categories__link"],
    });

    _item.appendChild(_link);
  }
};
