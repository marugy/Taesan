import { useDaumPostcodePopup } from 'react-daum-postcode';
import { DAUM_POSTCODE } from 'constants/USER_MODIFY';

export const usePostcodePopup = () => {
  return useDaumPostcodePopup(DAUM_POSTCODE);
};
