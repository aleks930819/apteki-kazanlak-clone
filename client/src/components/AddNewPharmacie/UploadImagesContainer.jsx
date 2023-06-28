import UploadImageInput from '../../ui/UploadImageInput';
import UploadImagesWrapper from '../../ui/UploadImagesWrapper';

const UploadImagesContainer = ({
  images,
  handleImagesUpload,
  isLoading,
  values,
}) => {
  return (
    <UploadImagesWrapper heading="Снимки">
      <UploadImageInput
        id="mainImage"
        label="Заглавна снимка"
        handleFileChange={handleImagesUpload}
        image={images?.mainImage.url || values?.mainImage.url}
        disabled={isLoading}
        imageName="mainImage"
      />
      <UploadImageInput
        id="secondaryImage"
        label="Втора снимка"
        handleFileChange={handleImagesUpload}
        image={images?.secondaryImage.url || values?.secondaryImage.url}
        disabled={isLoading}
        imageName="secondaryImage"
      />

      <UploadImageInput
        id="managerImage"
        label="Снимка на мениджъра"
        handleFileChange={handleImagesUpload}
        image={images?.managerImage.url || values?.managerImage.url}
        disabled={isLoading}
        imageName="managerImage"
      />

      <UploadImageInput
        id="pharmaciesImage-1"
        label="Снимки на Аптеката -1"
        handleFileChange={handleImagesUpload}
        image={images?.pharmaciesImage1.url || values?.pharmacieImages[0].url}
        disabled={isLoading}
        imageName="pharmaciesImage1"
      />
      <UploadImageInput
        id="pharmaciesImage-2"
        label="Снимки на Аптеката -2"
        handleFileChange={handleImagesUpload}
        imageName="pharmaciesImage2"
        image={images?.pharmaciesImage2.url || values?.pharmacieImages[1].url}
        disabled={isLoading}
      />
      <UploadImageInput
        id="pharmaciesImage-3"
        label="Снимки на Аптеката -3"
        handleFileChange={handleImagesUpload}
        image={images?.pharmaciesImage3.url || values?.pharmacieImages[2].url}
        disabled={isLoading}
        imageName="pharmaciesImage3"
      />
    </UploadImagesWrapper>
  );
};

export default UploadImagesContainer;
