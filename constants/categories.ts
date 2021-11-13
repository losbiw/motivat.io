import {Gradient} from '../types/gradient';

export interface Category {
  gradient: Gradient;
}

export type CategoryNames =
  | 'science'
  | 'movies'
  | 'languages'
  | 'it'
  | 'music'
  | 'creativity'
  | 'selfCare';

const categories: Record<CategoryNames, Category> = {
  science: {
    gradient: ['ED4589', 'FF6A57'],
  },
  movies: {
    gradient: ['DA22FF', '9733EE'],
  },
  languages: {
    gradient: ['4E54C8', '8F94FB'],
  },
  it: {
    gradient: ['AAFFA9', '43ECB9'],
  },
  music: {
    gradient: ['A9F5FF', '5AC4FF'],
  },
  creativity: {
    gradient: ['F34665', 'EC6B43'],
  },
  selfCare: {
    gradient: ['C955FF', 'FF83F3'],
  },
};

export default categories;
