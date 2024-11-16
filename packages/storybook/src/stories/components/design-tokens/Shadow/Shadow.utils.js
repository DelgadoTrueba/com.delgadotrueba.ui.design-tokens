import {
  filterObjectByString,
  groupByPrefix,
} from '../../../../utils/themeJson';

import common from '../../../../../../design-tokens/dist/css/dt-theme.common.json';

const shadowsRaised = groupByPrefix(
  filterObjectByString(common, 'shadow-raised'),
  3
);

const shadowsFloating = groupByPrefix(
  filterObjectByString(common, 'shadow-floating'),
  3
);

const shadowsApp = groupByPrefix(filterObjectByString(common, 'shadow-app'), 3);

const shadows = {
    ...filterObjectByString(common, 'shadow-top'),
    ...filterObjectByString(common, 'shadow-overlay'),
    ...filterObjectByString(common, 'shadow-intense'),
}

export default {
    shadows,
  ...shadowsRaised,
  ...shadowsFloating,
  ...shadowsApp,
};
