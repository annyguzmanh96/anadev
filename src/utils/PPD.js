import { create } from "react-native-pixel-perfect";

export default function PPD(size) {
  const designResolutionDesktop = {
    width: 1920,
    height: 1080,
  };

  const perfectSizeDesktop = create(designResolutionDesktop);

  return `${perfectSizeDesktop(size)}px`;
}
