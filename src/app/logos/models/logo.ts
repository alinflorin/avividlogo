export interface Logo {
  id?: string;
  name: string;
  ownerEmail: string;
  overlay?: string;
  logoFile?: string;
  logoWidth?: number;
  logoHeight?: number;
  qrFile?: string;
  qrColor?: string;
  qrBackgroundColor?: string;
  qrPadding?: number;
  mergedFile?: string;
  computedFiles?: string[];
}
