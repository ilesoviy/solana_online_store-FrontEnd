/**
 * Sanitizes url params deleting null or undefined values
 * @param queryParams an objcet to be turned in url params
 * @returns
 */
export default function sanitizeUrlParams(queryParams: { [x: string]: any }) {
  const qp = Object.entries(queryParams).filter(
    (entry) => entry[1] !== null && entry[1] !== undefined
  );
  return Object.fromEntries(qp);
}
