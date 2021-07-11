import { backupData } from "../db/backup.js";

export const api = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(backupData);
    }, 400);
  });

export const apiCrud = {
  getDepartments: async () => {
    const departments = await api();
    return [...departments];
  },
};
