import corsPluggin from 'hapi-modern-cors';
import swaggerPlugin from './swagger';

export default [...swaggerPlugin, corsPluggin];
