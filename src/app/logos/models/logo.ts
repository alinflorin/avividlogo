export interface Logo {
  id?: string;
  name: string;
  ownerEmail: string;
  logoFile?: string;
  qrFile?: string;
  qrColor?: string;
  qrBackgroundColor?: string;
  qrPadding?: number;
  mergedFile?: string;
  computedFiles?: string[];
}
