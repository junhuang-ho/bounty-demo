export const isNumeric = (val: any) =>
  (typeof val === "number" || (typeof val === "string" && val.trim() !== "")) &&
  !isNaN(val as number); // https://stackoverflow.com/a/58550111
