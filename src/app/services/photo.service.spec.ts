import { PhotoService } from './photo.service';
import { Platform } from '@ionic/angular';


describe('PhotoService', () => {
  let photoService: PhotoService;
  let mockPlatform: Partial<Platform>;

  beforeEach(() => {
    // Crea un mock básico para Platform
    mockPlatform = {
      is: () => true // Simula el método is() para que siempre devuelva true
    };

    // Crea la instancia de PhotoService con el mock de Platform
    photoService = new PhotoService(mockPlatform as any);
  });

  describe('addNewToGallery', () => {
    it('should add a photo to the photos array', async () => {
      // Inicialmente el arreglo photos está vacío
      expect(photoService.photos.length).toBe(0);

      // Llama al método addNewToGallery
      // Nota: Esto funcionará si addNewToGallery no depende críticamente de las dependencias externas
      // para añadir una foto al arreglo photos
      await photoService.addNewToGallery();

      // Verifica que el arreglo photos tenga al menos un elemento
      expect(photoService.photos.length).toBeGreaterThan(0);
    });
  });
});

