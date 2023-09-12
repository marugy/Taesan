import { useDaumPostcodePopup } from 'react-daum-postcode';
import { DAUM_POSTCODE } from 'constants/UserModify';

export const usePostcodePopup = () => {
  return useDaumPostcodePopup(DAUM_POSTCODE);
};
