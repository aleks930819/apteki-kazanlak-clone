import UploadImageInput from '../../ui/UploadImageInput';

const UploadImagesContainer = ({ images, handleImagesUpload, isLoading }) => {
  return (
    <div className="mt-10 grid grid-cols-3 gap-4">
      <UploadImageInput
        id="mainImage"
        label="Заглавна снимка"
        handleFileChange={handleImagesUpload}
        value={images[0]}
        image={images[0]?.url}
        disabled={isLoading}
      />
      <UploadImageInput
        id="secondaryImage"
        label="Втора снимка"
        handleFileChange={handleImagesUpload}
        value={images[1]}
        image={images[1]?.url}
        disabled={isLoading}
      />

      <UploadImageInput
        id="managerImage"
        label="Снимка на мениджъра"
        handleFileChange={handleImagesUpload}
        value={images[2]}
        image={images[2]?.url}
        disabled={isLoading}
      />

      <UploadImageInput
        id="pharmaciesImage-1"
        label="Снимки на Аптеката -1"
        handleFileChange={handleImagesUpload}
        value={images[3]}
        image={images[3]?.url}
        disabled={isLoading}
        multiple={true}
      />
      <UploadImageInput
        id="pharmaciesImage-2"
        label="Снимки на Аптеката -2"
        handleFileChange={handleImagesUpload}
        value={images[4]}
        image={images[4]?.url}
        disabled={isLoading}
        multiple={true}
      />
      <UploadImageInput
        id="pharmaciesImage-3"
        label="Снимки на Аптеката -3"
        handleFileChange={handleImagesUpload}
        value={images[5]}
        image={images[5]?.url}
        disabled={isLoading}
        multiple={true}
      />
    </div>
  );
};

export default UploadImagesContainer;
