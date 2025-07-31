import { cinemaData } from '@/constants';

type TabType = keyof typeof cinemaData;

export function groupCinemasByTheater(tab: TabType) {
  const rawList = cinemaData[tab];
  const grouped: Record<string, typeof rawList> = {};

  rawList.forEach((item) => {
    if (!grouped[item.theaterName]) {
      grouped[item.theaterName] = [];
    }
    grouped[item.theaterName].push(item);
  });
  return grouped;
}
