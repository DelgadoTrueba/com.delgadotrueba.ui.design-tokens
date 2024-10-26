export const groupColorsByPrefix = (colors) => {
    const grouped = {};
    Object.entries(colors).forEach(([key, value]) => {
      let keyArr =  key.split('-')

      while(keyArr.length > 4){
        keyArr = keyArr.slice(0, -1)
      }
      const prefix = keyArr.join('-');

      if (!grouped[prefix]) {
        grouped[prefix] = {};
      }
      grouped[prefix][key] = value;
    });

    return grouped;
  };