/* 
IMPORTANT
Import the TailwindCSS file only once, here, so it does not need to be imported into each component
Note - it seems that even if index.css is imported multiple times, it is only injected once in the head of the production code
Note - the final purged file will contain classes used in the main app, in addition to classes used in the components
*/
import '../index.css';

export { Button } from './Button';
export { Header } from './Header';
export { Page } from './Page';
