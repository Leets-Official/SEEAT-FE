export function getSeatLabel(row: string, column: number | string): string {
  return `${row}${String(column).padStart(2, '0')}`;
}
