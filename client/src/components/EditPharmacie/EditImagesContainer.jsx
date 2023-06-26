import UploadImageInput from '../../ui/UploadImageInput';
import UploadImagesWrapper from '../../ui/UploadImagesWrapper';

const EditImagesContainer = ({ images, handleImagesUpload, data }) => {
  return (
    <UploadImagesWrapper heading="Снимки">
      <UploadImageInput
        id="mainImage"
        label="Заглавна снимка"
        handleFileChange={handleImagesUpload}
          value={images[0] || data?.mainImage}
          image={images[0]?.url || data?.mainImage.url}
      />
      <UploadImageInput
        id="secondaryImage"
        label="Втора снимка"
        handleFileChange={handleImagesUpload}
          value={images[1] || data?.secondaryImage}
          image={images[1]?.url || data?.secondaryImage.url}
      />

      <UploadImageInput
        id="managerImage"
        label="Снимка на мениджъра"
        handleFileChange={handleImagesUpload}
          value={images[2] || data?.managerImage}
          image={images[2]?.url || data?.managerImage.url}
      />

      <UploadImageInput
        id="pharmaciesImage-1"
        label="Снимки на Аптеката -1"
        handleFileChange={handleImagesUpload}
          value={images[3] || data?.pharmacieImages[0]}
          image={images[3]?.url || data?.pharmacieImages[0].url}
        multiple={true}
      />
      <UploadImageInput
        id="pharmaciesImage-2"
        label="Снимки на Аптеката -2"
        handleFileChange={handleImagesUpload}
          value={images[4] || data?.pharmacieImages[1]}
          image={images[4]?.url || data?.pharmacieImages[1].url}
        multiple={true}
      />
      <UploadImageInput
        id="pharmaciesImage-3"
        label="Снимки на Аптеката -3"
        handleFileChange={handleImagesUpload}
          value={images[5] || data?.pharmacieImages[2]}
          image={images[5]?.url || data?.pharmacieImages[2].url}
        multiple={true}
      />
    </UploadImagesWrapper>
  );
};

export default EditImagesContainer;
