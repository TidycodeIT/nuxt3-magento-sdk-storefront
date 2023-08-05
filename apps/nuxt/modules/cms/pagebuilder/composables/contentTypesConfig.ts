// import rowConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Row/configAggregator';
import Row from '~/modules/cms/pagebuilder/composables/ContentTypes/Row/Row.vue';
import Text from '~/modules/cms/pagebuilder/composables/ContentTypes/Text/Text.vue';
/* @todo: all the components
import columnConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Column/configAggregator';
import Column from '~/modules/cms/pagebuilder/composables/ContentTypes/Column';
import columnGroupConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/ColumnGroup/configAggregator';
import ColumnGroup from '~/modules/cms/pagebuilder/composables/ContentTypes/ColumnGroup';
import columnLineConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/ColumnLine/configAggregator';
import ColumnLine from '~/modules/cms/pagebuilder/composables/ContentTypes/ColumnLine';
import imageConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Image/configAggregator';
import { ImageShimmer } from '~/modules/cms/pagebuilder/composables/ContentTypes/Image';
import headingConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Heading/configAggregator';
import Heading from '~/modules/cms/pagebuilder/composables/ContentTypes/Heading';
import textConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Text/configAggregator';
import Text from '~/modules/cms/pagebuilder/composables/ContentTypes/Text';
import tabsConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Tabs/configAggregator';
import tabItemConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/TabItem/configAggregator';
import blockConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Block/configAggregator';
import dynamicBlockConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/DynamicBlock/configAggregator';
import productsConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Products/configAggregator';
import buttonsConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Buttons/configAggregator';
import buttonItemConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/ButtonItem/configAggregator';
import htmlConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Html/configAggregator';
import dividerConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Divider/configAggregator';
import videoConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Video/configAggregator';
import mapConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Map/configAggregator';
import bannerConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Banner/configAggregator';
import { BannerShimmer } from '~/modules/cms/pagebuilder/composables/ContentTypes/Banner';
import ButtonItem from '~/modules/cms/pagebuilder/composables/ContentTypes/ButtonItem';
import sliderConfigAggregator from '~/modules/cms/pagebuilder/composables/ContentTypes/Slider/configAggregator';
import { SliderShimmer } from '~/modules/cms/pagebuilder/composables/ContentTypes/Slider';
import { DynamicBlockShimmer } from '~/modules/cms/pagebuilder/composables/ContentTypes/DynamicBlock';
 */

/* istanbul ignore next */
const contentTypesConfig = {
    row: {
        //configAggregator: rowConfigAggregator,
        component: Row
    },
    /*
    column: {
        configAggregator: columnConfigAggregator,
        component: Column
    },
    'column-group': {
        configAggregator: columnGroupConfigAggregator,
        component: ColumnGroup
    },
    'column-line': {
        configAggregator: columnLineConfigAggregator,
        component: ColumnLine
    },
    image: {
        configAggregator: imageConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/Image')),
        componentShimmer: ImageShimmer
    },
    heading: {
        configAggregator: headingConfigAggregator,
        component: Heading
    },
    */
    text: {
        // configAggregator: textConfigAggregator,
        component: Text
    },
    /*
    tabs: {
        configAggregator: tabsConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/Tabs'))
    },
    'tab-item': {
        configAggregator: tabItemConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/TabItem'))
    },
    buttons: {
        configAggregator: buttonsConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/Buttons'))
    },
    'button-item': {
        configAggregator: buttonItemConfigAggregator,
        component: ButtonItem
    },
    block: {
        configAggregator: blockConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/Block'))
    },
    dynamic_block: {
        configAggregator: dynamicBlockConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/DynamicBlock')),
        componentShimmer: DynamicBlockShimmer
    },
    products: {
        configAggregator: productsConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/Products'))
    },
    html: {
        configAggregator: htmlConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/Html'))
    },
    divider: {
        configAggregator: dividerConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/Divider'))
    },
    video: {
        configAggregator: videoConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/Video'))
    },
    map: {
        configAggregator: mapConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/Map'))
    },
    banner: {
        configAggregator: bannerConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/Banner')),
        componentShimmer: BannerShimmer
    },
    slider: {
        configAggregator: sliderConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/Slider')),
        componentShimmer: SliderShimmer
    },
    // Slide is just a banner wrapped inside a slider
    slide: {
        configAggregator: bannerConfigAggregator,
        component: React.lazy(() => import('~/modules/cms/pagebuilder/composables/ContentTypes/Banner')),
        componentShimmer: BannerShimmer
    }
    */
};

/**
 * Retrieve a content types configuration
 *
 * @param {string} contentType
 * @returns {*}
 */
export function getContentTypeConfig(contentType) {
    if (contentTypesConfig[contentType]) {
        return contentTypesConfig[contentType];
    }
}