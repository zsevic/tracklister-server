import { ServerRoute } from '@hapi/hapi';
import tracklistRoutes from './tracklist';

export default [...tracklistRoutes] as ServerRoute[];
