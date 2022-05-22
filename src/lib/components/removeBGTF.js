import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";

const removeBGTF = async ({
    imageSrc,
    internalResolution = 'medium',
}, callback) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = async () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const net = await bodyPix.load({
            architecture: 'MobileNetV1',
            outputStride: 16,
            multiplier: 0.75,
            quantBytes: 2
        });
        const { data: map } = await net.segmentPerson(canvas, {
            internalResolution
        });
        for (let i = 0; i < map.length; i++) {
            const [r, g, b, a] = [data[i * 4], data[i * 4 + 1], data[i * 4 + 2], data[i * 4 + 3]];
            if (map[i] === 0) {
                data[i * 4] = 0;
                data[i * 4 + 1] = 0;
                data[i * 4 + 2] = 0;
                data[i * 4 + 3] = 0;
            }
        }
        ctx.putImageData(imageData, 0, 0);
        const newImage = new Image();
        newImage.src = canvas.toDataURL();
        callback(newImage);
    };
};

export default removeBGTF;