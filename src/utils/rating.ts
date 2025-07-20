export function calculateRatingClick(e: React.MouseEvent<HTMLElement>, value: number): number {
  const { left, width } = e.currentTarget.getBoundingClientRect();
  const clickX = e.clientX - left;
  const clickedHalf = clickX < width / 2;
  return clickedHalf ? value - 0.5 : value;
}
