import UploadImageInput from '../../ui/UploadImageInput';
import UploadImagesWrapper from '../../ui/UploadImagesWrapper';

const UploadImagesContainer = ({ images, handleImagesUpload, isLoading }) => {
  return (
    <UploadImagesWrapper>
      <UploadImageInput
        id="mainImage"
        label="Заглавна снимка"
        handleFileChange={handleImagesUpload}
        value={images?.mainImage.url}
        image={images?.mainImage.url}
        disabled={isLoading}
        photoFieldName="mainImage"
      />
      <UploadImageInput
        id="secondaryImage"
        label="Втора снимка"
        handleFileChange={handleImagesUpload}
        value={images?.secondaryImage.url}
        image={images?.secondaryImage.url}
        disabled={isLoading}
        photoFieldName="secondaryImage"
      />

      <UploadImageInput
        id="managerImage"
        label="Снимка на мениджъра"
        handleFileChange={handleImagesUpload}
        value={images?.managerImage.url}
        image={images?.managerImage.url}
        disabled={isLoading}
        photoFieldName="managerImage"
      />

      <UploadImageInput
        id="pharmaciesImage-1"
        label="Снимки на Аптеката -1"
        handleFileChange={handleImagesUpload}
        value={images?.pharmaciesImage1.url}
        image={images?.pharmaciesImage1.url}
        disabled={isLoading}
        photoFieldName="pharmaciesImage1"
      />
      <UploadImageInput
        id="pharmaciesImage-2"
        label="Снимки на Аптеката -2"
        handleFileChange={handleImagesUpload}
        value={images?.pharmaciesImage2.url}
        image={images?.pharmaciesImage2.url}
        disabled={isLoading}
        photoFieldName="pharmaciesImage2"
      />
      <UploadImageInput
        id="pharmaciesImage-3"
        label="Снимки на Аптеката -3"
        handleFileChange={handleImagesUpload}
        value={images?.pharmaciesImage3.url}
        image={images?.pharmaciesImage3.url}
        disabled={isLoading}
        photoFieldName="pharmaciesImage3"
      />
    </UploadImagesWrapper>
  );
};

export default UploadImagesContainer;
