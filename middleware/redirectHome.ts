import { Middleware } from '@nuxt/types'

const redirectHome: Middleware = (context) => {
    context.redirect('/')
}

export default redirectHome