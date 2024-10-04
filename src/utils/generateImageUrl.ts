function generateImageUrl({
  fileName,
  format,
  option = 'q_auto,c_fill',
}: {
  fileName: string;
  format: 'jpg' | 'webp';
  option?: string;
}) {
  return `https://res.cloudinary.com/dsuqabvwz/image/upload/${option}/v1728024230/${fileName}.${format}`;
}

export default generateImageUrl;
