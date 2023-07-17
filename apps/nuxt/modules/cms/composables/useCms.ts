import {sdk} from "~/sdk.config";

export default function () {

    const getCms = async () => {
        try {
            const {data: {cmsPage: pageData}, error, errors} = await sdk.magento.cmsPage({
                identifier: 'home'
            })

            return {pageData}
        } catch (error) {
            if (error instanceof Error) {
                console.log('error ==yo==> ', error.message)
                if (error?.message?.includes('ECONNREFUSED')) {
                    throw createError({statusCode: 500, statusMessage: 'oops, could not connect to the api'})
                }
                throw createError({statusCode: 500, statusMessage: 'oops, there was a problem' + error})
            }
        }
    }

    return {
        getCms
    }
}
