import StyleDictionary from 'style-dictionary';

StyleDictionary.registerTransform({
    type: 'value',
    name: 'mode-dark',
    transitive: true,
    transformer: function (token) {
      if (token.value?.dark != null) {
        return token.value.dark;
      }
      return token.value;
    },
  });