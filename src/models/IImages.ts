export interface Iimages {
  0: Iimage;
  1: Iimage;
  2: Iimage;
  3: Iimage;
  4: Iimage;
  5: Iimage;
  6: Iimage;
  7: Iimage;
  8: Iimage;
  9: Iimage;
  10: Iimage;
  11: Iimage;
  12: Iimage;
  13: Iimage;
}
export interface IimagesGenereal {
  general: IimageGeneral;
}

export interface Iimage {
  logo: string;
  background: string;
  emblem: string;
}

interface IimageGeneral {
  bluePatternBackground: string;
  startBackground: string;
  onError: string;
  obosLogo: string;
  sponsorLogo: string;
  curve: string;
}
