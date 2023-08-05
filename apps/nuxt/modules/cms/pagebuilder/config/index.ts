export default {
    row: {
        configAggregator: rowConfigAggregator,
        component: Row
    },
    column: {
        configAggregator: columnConfigAggregator,
        component: Column
    },
    /*
    'column-group': {
        configAggregator: columnGroupConfigAggregator,
        component: ColumnGroup
    },
    'column-line': {
        configAggregator: columnLineConfigAggregator,
        component: ColumnLine
    },
    */
    image: {
        configAggregator: imageConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Image')),
        componentShimmer: ImageShimmer
    },
    /*
    heading: {
        configAggregator: headingConfigAggregator,
        component: Heading
    },
    */
    text: {
        configAggregator: textConfigAggregator,
        component: Text
    },
    /*
    tabs: {
        configAggregator: tabsConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Tabs'))
    },
    'tab-item': {
        configAggregator: tabItemConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/TabItem'))
    },
    buttons: {
        configAggregator: buttonsConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Buttons'))
    },
    'button-item': {
        configAggregator: buttonItemConfigAggregator,
        component: ButtonItem
    },
    block: {
        configAggregator: blockConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Block'))
    },
    dynamic_block: {
        configAggregator: dynamicBlockConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/DynamicBlock')),
        componentShimmer: DynamicBlockShimmer
    },
    products: {
        configAggregator: productsConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Products'))
    },
    html: {
        configAggregator: htmlConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Html'))
    },
    divider: {
        configAggregator: dividerConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Divider'))
    },
    video: {
        configAggregator: videoConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Video'))
    },
    map: {
        configAggregator: mapConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Map'))
    },
    banner: {
        configAggregator: bannerConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Banner')),
        componentShimmer: BannerShimmer
    },
    slider: {
        configAggregator: sliderConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Slider')),
        componentShimmer: SliderShimmer
    },
    // Slide is just a banner wrapped inside a slider
    slide: {
        configAggregator: bannerConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Banner')),
        componentShimmer: BannerShimmer
    }
    */
};