import { getGallery as getProductGallery } from '~/modules/catalog/product/getters/productGetters';
import { useImage } from '~/composables/useImage';
import type { Product } from '@vue-storefront/magento-types';
import type { ImageSizes } from '~/composables';
export interface ProductGalleryImageInterface {
  url: string;
}

export interface ProductGalleryInterface {
  mobile?: ProductGalleryImageInterface;
  desktop?: ProductGalleryImageInterface;
  big?: ProductGalleryImageInterface;
  alt?: string;
}

export interface UseProductGalleryInterface {
  /**
   * Computed {@link ProductGalleryInterface} data array, mapped based on the product's gallery fetch
   */
  productGallery: ComputedRef<ProductGalleryInterface[]>,
  /**
   * Available image sizes derived from {@link UseImageInterface}
   */
  imageSizes: ImageSizes
}

export function useProductGallery(product: Product, imgPlaceholder = ''): UseProductGalleryInterface {
  const { getMagentoImage, imageSizes } = useImage();
  const productGallery = computed(() => getProductGallery(product).map((img) => {
    const mobileImg = img?.small ? getMagentoImage(img?.small) : imgPlaceholder;
    const desktopImg = img?.normal ? getMagentoImage(img?.normal) : imgPlaceholder;
    const bigImg = img?.big ? getMagentoImage(img?.big) : imgPlaceholder;

    return {
      mobile: { url: mobileImg },
      desktop: { url: desktopImg },
      big: { url: bigImg },
      alt: product.name || " ", // provide a default value here
      placeholder: imgPlaceholder,
    };
  }));

  return {
    productGallery,
    imageSizes,
  };
}

export default useProductGallery;

