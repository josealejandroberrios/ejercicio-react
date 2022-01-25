export const formatCurrencyValue = (
  value: string | number,
  options: Intl.NumberFormatOptions = { style: 'currency', currency: 'ARS' },
): string =>
  new Intl.NumberFormat('es-AR', {
    ...options,
    maximumFractionDigits: 0,
  }).format(Number(value));
