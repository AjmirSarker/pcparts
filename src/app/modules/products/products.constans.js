export const productFilterFields = ["Model", "Brand", "Category", "Status"];

export const mergedObjectFields = (queryObject) => {
  const newArray = productFilterFields
    .map((value) => {
      const matchingKey = Object.keys(queryObject).find((key) => key === value);

      if (matchingKey) {
        const newObj = {};
        newObj[matchingKey] = queryObject[matchingKey];
        return newObj;
      }

      return null; // Handle cases where no key matches the value
    })
    .filter((obj) => obj !== null);
  console.log("Filter Array", newArray);
  const mergedObject = {};
  newArray?.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      mergedObject[key] = value;
    });
  });

  console.log("Filter obj", mergedObject);
  return mergedObject;
};
