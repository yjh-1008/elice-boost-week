export default function searchParamGenerator(query: Record<string, string|string[]>) {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (typeof value === 'string') {
      params.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach(v => params.append(key, v));
    }
  });
  return params;
}