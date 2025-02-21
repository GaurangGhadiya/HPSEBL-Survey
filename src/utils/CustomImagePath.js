export const getImagePath = (path) => {
    const prefix = "/hpsebl"; // For staging
    // const prefix = "/"; // For local
    return `${prefix}${path}`;
  };
