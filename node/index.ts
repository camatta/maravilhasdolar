import { Service, ServiceContext } from '@vtex/api';
import { Clients } from './clients';
import { customNewsletterRock } from './services/customNewsletterRock';

export async function status(ctx: ServiceContext<Clients>, next: () => Promise<void>) {
  ctx.status = 200
  ctx.body = { message: 'ok' }
  await next()
}

export default new Service({ 
    clients: {
        implementation: Clients,
        options: {
            memory: {}
        }
    },
    routes: {
        customNewsletterRock,
        status
    },
});