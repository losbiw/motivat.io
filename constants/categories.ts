import {Gradient} from '../types/gradient';

export interface Category {
  gradient: Gradient;
}

export type CategoryNames =
  | 'science'
  | 'movies'
  | 'languages'
  | 'computers'
  | 'music'
  | 'selfCare'
  | 'business'
  | 'math'
  | 'books'
  | 'art';

const categories: Record<CategoryNames, Category> = {
  science: {
    gradient: ['ED4589', 'FF6A57'],
  },
  business: {
    gradient: ['DA22FF', '9733EE'],
  },
  math: {
    gradient: ['DA22FF', '9733EE'],
  },
  books: {
    gradient: ['DA22FF', '9733EE'],
  },
  movies: {
    gradient: ['DA22FF', '9733EE'],
  },
  languages: {
    gradient: ['4E54C8', '8F94FB'],
  },
  computers: {
    gradient: ['AAFFA9', '43ECB9'],
  },
  music: {
    gradient: ['A9F5FF', '5AC4FF'],
  },
  art: {
    gradient: ['F34665', 'EC6B43'],
  },
  selfCare: {
    gradient: ['C955FF', 'FF83F3'],
  },
};

export default categories;
