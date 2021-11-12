import {Category} from '../constants/categories';
import {Day} from './day';

export interface Goal {
  title: string;
  notification?: string;
  category: Category;
  days: Day[];
}
