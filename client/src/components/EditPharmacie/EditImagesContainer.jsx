import UploadImageInput from '../../ui/UploadImageInput';
import UploadImagesWrapper from '../../ui/UploadImagesWrapper';

const EditImagesContainer = ({ images, handleImagesUpload, data }) => {
  return (
    <UploadImagesWrapper>
      <UploadImageInput
        id="mainImage"
        label="Заглавна снимка"
        handleFileChange={handleImagesUpload}
        imageName="mainImage"
        image={images?.mainImage.url || data?.mainImage.url}
      />
      <UploadImageInput
        id="secondaryImage"
        label="Втора снимка"
        handleFileChange={handleImagesUpload}
        image={images?.secondaryImage.url || data?.secondaryImage.url}
        imageName="secondaryImage"
      />

      <UploadImageInput
        id="managerImage"
        label="Снимка на мениджъра"
        handleFileChange={handleImagesUpload}
        image={images?.managerImage.url || data?.managerImage.url}
        imageName="managerImage"
      />

      <UploadImageInput
        id="pharmaciesImage-1"
        label="Снимки на Аптеката -1"
        handleFileChange={handleImagesUpload}
        image={images?.pharmaciesImage1.url || data?.pharmacieImages[0].url}
        imageName="pharmaciesImage1"
      />
      <UploadImageInput
        id="pharmaciesImage-2"
        label="Снимки на Аптеката -2"
        handleFileChange={handleImagesUpload}
        imageName="pharmaciesImage2"
        image={images?.pharmaciesImage2.url || data?.pharmacieImages[1].url}
      />
      <UploadImageInput
        id="pharmaciesImage-3"
        label="Снимки на Аптеката -3"
        handleFileChange={handleImagesUpload}
        image={images?.pharmaciesImage3.url || data?.pharmacieImages[2].url}
        imageName="pharmaciesImage3"
      />
    </UploadImagesWrapper>
  );
};

export default EditImagesContainer;
