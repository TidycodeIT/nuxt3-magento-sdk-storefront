import {config} from "dotenv";

config();

const cookieNames = {
    currencyCookieName: 'vsf-currency',
    countryCookieName: 'vsf-country',
    localeCookieName: 'vsf-locale',
    cartCookieName: 'vsf-cart',
    customerCookieName: 'vsf-customer',
    storeCookieName: 'vsf-store',
    messageCookieName: 'vsf-message'
};

export const integrations = {
    magento: {
        location: '@vue-storefront/magento-api/server',
        customQueries: {
            'category-search-custom-query': ({ variables, metadata }) => ({
               variables,
               query: `
                 query categorySearch($filters: CategoryFilterInput) {
                   categoryList(filters: $filters) {
                     ${metadata.fields}
                   }
                 }
               `
            }),
            'products-custom-query': ({ variables, metadata }) => ({
                   variables,
                   query: `
                     query productsList(
                       $search: String = "",
                       $filter: ProductAttributeFilterInput,
                       $pageSize: Int = 10,
                       $currentPage: Int = 1,
                       $sort: ProductAttributeSortInput
                     ) {
                       products(search: $search, filter: $filter, sort: $sort, pageSize: $pageSize, currentPage: $currentPage) {
                         ${metadata.fields}
                       }
                     }
                   `
                }),
          },
        configuration: {
            api: process.env.VSF_MAGENTO_GRAPHQL_URL,
            cookies: {
                ...cookieNames,
            },
            cookiesDefaultOpts: {
                httpOnly: process.env.VSF_COOKIE_HTTP_ONLY || false,
                secure: process.env.VSF_COOKIE_SECURE || false,
                sameSite: process.env.VSF_COOKIE_SAME_SITE || 'lax',
                path: process.env.VSF_COOKIE_PATH || '/',
            },
            defaultStore: 'default',
            customApolloHttpLinkOptions: {
                useGETForQueries: true,
            },
            magentoBaseUrl: process.env.VSF_MAGENTO_BASE_URL,
            magentoApiEndpoint: process.env.VSF_MAGENTO_GRAPHQL_URL,
            imageProvider: process.env.NUXT_IMAGE_PROVIDER,
            recaptcha: {
                isEnabled: process.env.VSF_RECAPTCHA_ENABLED === 'true',
                sitekey: process.env.VSF_RECAPTCHA_SITE_KEY,
                secretkey: process.env.VSF_RECAPTCHA_SECRET_KEY,
                version: process.env.VSF_RECAPTCHA_VERSION,
                score: process.env.VSF_RECAPTCHA_MIN_SCORE,
            },
            customer: {
                customer_create_account_confirm: true,
            },
        }
    }
};
