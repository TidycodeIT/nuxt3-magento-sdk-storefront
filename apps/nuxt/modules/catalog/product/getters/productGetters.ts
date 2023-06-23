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

export const getDisplayPrice = (product: Product, locales = 'en-US') => {
  const currency = product.price_range?.minimum_price?.regular_price.currency as string
  const price = product.price_range?.minimum_price?.regular_price.value?.valueOf() as number

  return price ? new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency
  }).format(price) : undefined
}
export const getThumbnailUrl = (details: any) => {
  return details.thumbnail.url as string ?? ''
}

export const getProductDescription = (details: any) => {
  return details?.description?.html
}

export const getLabel = (details: any) => {
  return details.thumbnail.label as string
}

export const getProductPath = (product: Product) => {
  if (!product) return '/';
  return `/${product?.url_rewrites?.[0]?.url ?? product.url_key}`;
};
