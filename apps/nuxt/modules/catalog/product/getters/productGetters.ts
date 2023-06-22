interface MediaGalleryItem {
  small: string;
  normal: string;
  big: string;
}

export const getGallery = (product: Product, maxGallerySize = 4): MediaGalleryItem[] => {
  const images: MediaGalleryItem[] = [];

  if (!product?.media_gallery?.length && !product?.configurable_product_options_selection?.media_gallery?.length) {
    return images;
  }

  const selectedGallery = product.configurable_product_options_selection?.media_gallery.length
    ? product.configurable_product_options_selection.media_gallery
    : product.media_gallery;

  for (const galleryItem of selectedGallery) {
    images.push({
      small: galleryItem.url,
      normal: galleryItem.url,
      big: galleryItem.url,
    });
  }

  return images.slice(0, maxGallerySize);
};
export default {
  getGallery,
};
