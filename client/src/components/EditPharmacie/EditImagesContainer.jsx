import UploadImageInput from '../../ui/UploadImageInput';
import UploadImagesWrapper from '../../ui/UploadImagesWrapper';

const EditImagesContainer = ({ images, handleImagesUpload, data }) => {
  return (
    <UploadImagesWrapper heading="Снимки">
      <UploadImageInput
        id="mainImage"
        label="Заглавна снимка"
        handleFileChange={handleImagesUpload}
        imageName="mainImage"
        value={images?.mainImage.url || data?.mainImage.url}
        image={images?.mainImage.url || data?.mainImage.url}
      />
      <UploadImageInput
        id="secondaryImage"
        label="Втора снимка"
        handleFileChange={handleImagesUpload}
        value={images?.secondaryImage.url || data?.secondaryImage.url}
        image={images?.secondaryImage.url || data?.secondaryImage.url}
        imageName="secondaryImage"
      />

      <UploadImageInput
        id="managerImage"
        label="Снимка на мениджъра"
        handleFileChange={handleImagesUpload}
        value={images?.managerImage.url || data?.managerImage.url}
        image={images?.managerImage.url || data?.managerImage.url}
        imageName="managerImage"
      />

      <UploadImageInput
        id="pharmaciesImage-1"
        label="Снимки на Аптеката -1"
        handleFileChange={handleImagesUpload}
        value={images?.pharmaciesImage1.url || data?.pharmacieImages[0].url}
        image={images?.pharmaciesImage1.url || data?.pharmacieImages[0].url}
        imageName="pharmaciesImage1"
      />
      <UploadImageInput
        id="pharmaciesImage-2"
        label="Снимки на Аптеката -2"
        handleFileChange={handleImagesUpload}
        imageName="pharmaciesImage2"
        value={images?.pharmaciesImage2.url || data?.pharmacieImages[1].url}
        image={images?.pharmaciesImage2.url || data?.pharmacieImages[1].url}
      />
      <UploadImageInput
        id="pharmaciesImage-3"
        label="Снимки на Аптеката -3"
        handleFileChange={handleImagesUpload}
        value={images?.pharmaciesImage3.url || data?.pharmacieImages[2].url}
        image={images?.pharmaciesImage3.url || data?.pharmacieImages[2].url}
        imageName="pharmaciesImage3"
      />
    </UploadImagesWrapper>
  );
};

export default EditImagesContainer;
