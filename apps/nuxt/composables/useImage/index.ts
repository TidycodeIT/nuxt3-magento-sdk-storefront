import { UseImageInterface } from './useImage';

const imageSizes = {
  productCard: {
    width: 216,
    height: 268,
  },
  productCardHorizontal: {
    width: 140,
    height: 200,
  },
  checkout: {
    imageWidth: 100,
    imageHeight: 100,
  },
  productGallery: {
    thumbWidth: 160,
    thumbHeight: 160,
    imageWidth: 1080,
    imageHeight: 1340,
  },
  cart: {
    imageWidth: 170,
    imageHeight: 170,
  },
};

export function useImage(): UseImageInterface {
  const getMagentoImage = (fullImageUrl: string | null) => {
    if (!fullImageUrl) return '';

    const config = useRuntimeConfig()
    const magentoBaseUrl = config?.private?.magentoBaseUrl
    const imageProvider = config?.private?.imageProvider

    if (imageProvider !== 'ipx') {
      const url = fullImageUrl.split(`${magentoBaseUrl}`);

      const regex = /cache\/(.*?)\//gm;
      return url[1]?.replace(regex, '');
    }

    return fullImageUrl;
  };

  return {
    getMagentoImage,
    imageSizes,
  };
}

export * from './useImage';
export default useImage;
