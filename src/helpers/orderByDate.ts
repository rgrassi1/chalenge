import { isAfter } from 'date-fns';
import IOrder from '../types/order';
import IPost from '../types/post';

const orderByDate = (order: IOrder) => (curr: IPost, next: IPost): 1 | -1 => {
  const currDate = new Date(curr.metadata.publishedAt).getTime();
  const nextDate = new Date(next.metadata.publishedAt).getTime();
  if (isAfter(currDate, nextDate)) {
    return order.type === 'desc' ? -1 : 1;
  }
  return order.type === 'desc' ? 1 : -1;
};

export default orderByDate;
