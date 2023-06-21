import { create } from "react-native-pixel-perfect";

const designResolutionDesktop = {
  width: 1920,
  height: 1080,
};

const usePixelPerfect = () => {
  const PP = create(designResolutionDesktop);

  const formattedPP = (size) => {
    return `${PP(size)}px`;
  };

  return { PP: formattedPP };
};

export default usePixelPerfect;
