import { otherNewsAndAnnouncements } from '../constants/announcements';

export const findAnnounce = (id) => otherNewsAndAnnouncements.find((post) => post.id === id);
