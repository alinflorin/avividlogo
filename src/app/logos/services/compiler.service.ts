import { from } from 'rxjs';

export class CompilerService {
  private compiler: any = new (window as any).MINDAR.IMAGE.Compiler(false);
  constructor() {}

  compile(img: HTMLImageElement, callback: (d: any) => void) {
    return from(this.compiler.compileImageTargets([img], callback));
  }

  export() {
    return this.compiler.exportData();
  }

  showImage = (targetImage: any, points: any) => {
    const canvas: any = document.createElement('canvas');
    canvas.width = targetImage.width;
    canvas.height = targetImage.height;
    canvas.style.width = canvas.width;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = new Uint32Array(imageData.data.buffer);

    const alpha = 0xff << 24;
    for (let c = 0; c < targetImage.width; c++) {
      for (let r = 0; r < targetImage.height; r++) {
        const pix = targetImage.data[r * targetImage.width + c];
        data[r * canvas.width + c] = alpha | (pix << 16) | (pix << 8) | pix;
      }
    }

    var pix = (0xff << 24) | (0x00 << 16) | (0xff << 8) | 0x00; // green
    for (let i = 0; i < points.length; ++i) {
      const x = points[i].x;
      const y = points[i].y;
      const offset = x + y * canvas.width;
      data[offset] = pix;
      //for (var size = 1; size <= 3; size++) {
      for (var size = 1; size <= 6; size++) {
        data[offset - size] = pix;
        data[offset + size] = pix;
        data[offset - size * canvas.width] = pix;
        data[offset + size * canvas.width] = pix;
      }
    }
    ctx.putImageData(imageData, 0, 0);
    return new Promise<Blob>((accept) => {
      canvas.toBlob((b: Blob) => {
        accept(b);
      });
    });
  };

  showData = async (data: any) => {
    const images: Promise<Blob>[] = [];
    for (let i = 0; i < data.trackingImageList.length; i++) {
      const image = data.trackingImageList[i];
      const points = data.trackingData[i].points.map((p: any) => {
        return { x: Math.round(p.x), y: Math.round(p.y) };
      });
      images.push(this.showImage(image, points));
    }

    for (let i = 0; i < data.imageList.length; i++) {
      const image = data.imageList[i];
      const kpmPoints = [
        ...data.matchingData[i].maximaPoints,
        ...data.matchingData[i].minimaPoints,
      ];
      const points2 = [];
      for (let j = 0; j < kpmPoints.length; j++) {
        points2.push({
          x: Math.round(kpmPoints[j].x),
          y: Math.round(kpmPoints[j].y),
        });
      }
      images.push(this.showImage(image, points2));
    }
    return await Promise.all(images);
  };
}
