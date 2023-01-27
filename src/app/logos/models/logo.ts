export interface Logo {
  id?: string;
  name: string;
  ownerEmail: string;
  logoFile?: string;
  qrFile?: string;
  mergedFile?: string;
  computedFiles?: string[];
}
