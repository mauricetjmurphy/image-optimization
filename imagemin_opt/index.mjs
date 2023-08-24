import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

(async () => {
  const files = await imagemin(["./images/**.*"], {
    destination: "build",
    plugins: [imageminMozjpeg({ quality: 80 }), imageminPngquant({ quality: [0.1, 0.3] })],
  });
  console.log(files);
})();
