import { getGallery as getProductGallery } from '~/modules/catalog/product/getters/productGetters';
import { useImage } from '~/composables/useImage';
import {Product} from '@vue-storefront/magento-types';
import type { UseProductGalleryInterface } from '~/modules/catalog/product/composables/useProductGallery/useProductGallery';

export function useProductGallery(product: Product, imgPlaceholder = ''): UseProductGalleryInterface {
  const { getMagentoImage, imageSizes } = useImage();
  const productGallery = computed(() => getProductGallery(product).map((img) => ({
    mobile: { url: getMagentoImage(img.small) },
    desktop: { url: getMagentoImage(img.normal) },
    big: { url: getMagentoImage(img.big) },
    alt: product.name,
    placeholder: imgPlaceholder,
  })));

  return {
    productGallery,
    imageSizes,
  };
}

export default useProductGallery;
export * from './useProductGallery';
