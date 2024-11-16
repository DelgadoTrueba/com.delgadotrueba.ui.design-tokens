import {
  filterObjectByString,
  groupByPrefix,
} from '../../../../utils/themeJson';

import common from '../../../../../../design-tokens/dist/css/dt-theme.common.json';


export default {
  'shadow-general': filterObjectByString(common, 'shadow')
};
