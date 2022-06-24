import { getImageAttributes } from './Image';
import config from '@plone/volto/registry';

const ploneImage = {
  download: 'http://localhost:8080/Plone/test-images/@@images/image',
  width: 1920,
  height: 960,
  scales: {
    icon: {
      download: 'http://localhost:8080/Plone/test-images/@@images/image/icon',
      width: 32,
      height: 16,
    },
    large: {
      download: 'http://localhost:8080/Plone/test-images/@@images/image/large',
      width: 768,
      height: 384,
    },
    listing: {
      download:
        'http://localhost:8080/Plone/test-images/@@images/image/listing',
      width: 16,
      height: 8,
    },
    mini: {
      download: 'http://localhost:8080/Plone/test-images/@@images/image/mini',
      width: 200,
      height: 100,
    },
    preview: {
      download:
        'http://localhost:8080/Plone/test-images/@@images/image/preview',
      width: 400,
      height: 200,
    },
    thumb: {
      download: 'http://localhost:8080/Plone/test-images/@@images/image/thumb',
      width: 128,
      height: 64,
    },
    tile: {
      download: 'http://localhost:8080/Plone/test-images/@@images/image/tile',
      width: 64,
      height: 32,
    },
  },
};

describe('Image', () => {
  describe('getSrcSet', () => {
    config.settings.imageScales = {
      large: 768,
      preview: 400,
      mini: 200,
      thumb: 128,
      tile: 64,
      icon: 32,
      listing: 16,
    };

    it('returns srcset from url', () => {
      expect(
        getImageAttributes(
          'http://localhost:8080/Plone/photo.png/@@images/image',
        ),
      ).toEqual({
        src: '/photo.png/@@images/image/listing',
        srcSet: [
          '/photo.png/@@images/image/listing 16w',
          '/photo.png/@@images/image/icon 32w',
          '/photo.png/@@images/image/tile 64w',
          '/photo.png/@@images/image/thumb 128w',
          '/photo.png/@@images/image/mini 200w',
          '/photo.png/@@images/image/preview 400w',
          '/photo.png/@@images/image/large 768w',
        ],
      });
    });

    it('returns srcset from object', () => {
      expect(getImageAttributes(ploneImage)).toEqual({
        src: '/test-images/@@images/image/listing',
        srcSet: [
          '/test-images/@@images/image/listing 16w',
          '/test-images/@@images/image/icon 32w',
          '/test-images/@@images/image/tile 64w',
          '/test-images/@@images/image/thumb 128w',
          '/test-images/@@images/image/mini 200w',
          '/test-images/@@images/image/preview 400w',
          '/test-images/@@images/image/large 768w',
        ],
        aspectRatio: 2,
      });
    });

    it('returns srcset from object with maxSize', () => {
      expect(getImageAttributes(ploneImage, { maxSize: 200 })).toEqual({
        src: '/test-images/@@images/image/listing',
        srcSet: [
          '/test-images/@@images/image/listing 16w',
          '/test-images/@@images/image/icon 32w',
          '/test-images/@@images/image/tile 64w',
          '/test-images/@@images/image/thumb 128w',
          '/test-images/@@images/image/mini 200w',
        ],
        width: 200,
        height: 100,
        aspectRatio: 2,
      });
    });

    it('returns srcset from url with original included', () => {
      expect(getImageAttributes(ploneImage, { useOriginal: true })).toEqual({
        src: '/test-images/@@images/image/listing',
        srcSet: [
          '/test-images/@@images/image/listing 16w',
          '/test-images/@@images/image/icon 32w',
          '/test-images/@@images/image/tile 64w',
          '/test-images/@@images/image/thumb 128w',
          '/test-images/@@images/image/mini 200w',
          '/test-images/@@images/image/preview 400w',
          '/test-images/@@images/image/large 768w',
          '/test-images/@@images/image 1920w',
        ],
        aspectRatio: 2,
      });
    });
  });
});