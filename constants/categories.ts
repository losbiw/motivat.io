import {ImageSourcePropType} from 'react-native';
import {Gradient} from '../types/gradient';

export interface Category {
  gradient: Gradient;
  icon?: ImageSourcePropType;
}

export type CategoryNames =
  | 'movies'
  | 'languages'
  | 'computers'
  | 'health'
  | 'business'
  | 'books'
  | 'art';

const categories: Record<CategoryNames, Category> = {
  business: {
    gradient: ['38ef7d', '17D0C1'],
    icon: require('../assets/icons/categories/business.png'),
  },
  books: {
    gradient: ['FFAD71', 'FF794F'],
    icon: require('../assets/icons/categories/books.png'),
  },
  movies: {
    gradient: ['#EB52FF', '#9B38FF'],
    icon: require('../assets/icons/categories/movies.png'),
  },
  languages: {
    gradient: ['9FEEFF', '65CAFF'],
    icon: require('../assets/icons/categories/languages.png'),
  },
  computers: {
    gradient: ['#8f94fb', '#4e54c8'],
    icon: require('../assets/icons/categories/computers.png'),
  },
  art: {
    gradient: ['#FFD14E', 'FEB150'],
    icon: require('../assets/icons/categories/art.png'),
  },
  health: {
    gradient: ['FF6A57', 'ED4589'],
    icon: require('../assets/icons/categories/health.png'),
  },
};

export default categories;
