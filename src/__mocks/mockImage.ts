import { faker } from '@faker-js/faker';

export function getRandomImage(width: number = 300, height: number = 300) {
  return faker.image.urlLoremFlickr({ width, height, category: 'nature' });
}
