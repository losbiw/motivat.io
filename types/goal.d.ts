import {CategoryNames} from '../constants/categories';
import {Day} from './day';

export interface Goal {
  id: number;
  title: string;
  notification?: string;
  category: CategoryNames;
  days: Day[];
}

export type DisplayGoal = Pick<Goal, 'title' | 'category'>;
