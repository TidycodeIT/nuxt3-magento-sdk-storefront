import {sdk} from "~/sdk.config";

export default function () {
    const getPageBuilderData = async (data: String, isClientSide: boolean) => {
        if (detectPageBuilder(data) && isClientSide) {
            // @todo: handle pagebuilder and start the process
            return data;
        }

        return data;
    }

    /**
     * Check if content from Magento has Page Builder enabled
     *
     * @param content
     * @returns {boolean}
     */
    const detectPageBuilder = (content) => {
        return /data-content-type=/.test(content);
    }

    return {
        getPageBuilderData
    }
}