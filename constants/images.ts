/**
 * Image Assets Registry
 *
 * Centralizes all image imports for the Food Scanner app.
 * This pattern makes image management easier and provides a single source of truth for all image assets.
 */

import logo from '../assets/images/logo.png';
import hero from '../assets/images/hero.png';
import magnifyingGlass from '../assets/images/magnifying-glass.png';

// export all images as a single object for easy imports elsewhere
export default {
  logo,
  hero,
  magnifyingGlass,
};
