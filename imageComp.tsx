import React from 'react';

const ImageComponent: React.FC = () => {
  const s3BucketUrl = `https://barber-jpg.s3.us-east-2.amazonaws.com`;
  const imageUrls: string[] = Array.from({ length: 18 }, (_, index) => `${s3BucketUrl}/${index + 1}.jpg`);

  return (
    <div className="flex flex-wrap -mx-2">
      {imageUrls.map((url, index) => (
        <div key={index} className="w-full md:w-1/4 p-2">
          <img src={url} alt={`Image ${index + 1}`} className="w-full" />
        </div>
      ))}
    </div>
  );
};

export default ImageComponent;
