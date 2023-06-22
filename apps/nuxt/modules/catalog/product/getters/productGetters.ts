import type { Product } from '@vue-storefront/magento-types'

interface MediaGalleryItem {
  small: string | undefined;
  normal: string | undefined;
  big: string | undefined;
}

export const getGallery = (product: Product, maxGallerySize = 4): MediaGalleryItem[] => {
  const images: MediaGalleryItem[] = [];

  if (!product?.media_gallery?.length && !product?.configurable_product_options_selection?.media_gallery?.length) {
    return images;
  }

  const selectedGallery = product?.configurable_product_options_selection?.media_gallery?.length
    ? product.configurable_product_options_selection.media_gallery
    : product.media_gallery;

  if (selectedGallery && selectedGallery.length > 0) {
    for (const galleryItem of selectedGallery) {
      images.push({
        small: galleryItem?.url || undefined,
        normal: galleryItem?.url || undefined,
        big: galleryItem?.url || undefined,
      });
    }
  }

  return images.slice(0, maxGallerySize);
};

export default {
  getGallery,
};
