// types
import { optionType, optionValue } from '../types/input-select';
import { toCapitalize } from '../utils/toCapitalize';

const useInputSelect = () => {
  const optionsVariant = ['default', 'outline', 'text'];
  const optionsColor = ['default', 'primary', 'secondary', 'danger'];
  const optionsSize = ['default', 'small', 'medium', 'large'];

  function renderizeOptions(optionArray: any[]) {
    return optionArray.map((option) => (
      <option key={option} value={option}>
        {toCapitalize(option)}
      </option>
    ));
  }

  function renderizeOptionsSize(optionSizeArray: any[]) {
    return optionSizeArray.map((optionSize: optionType) => {
      let value: optionValue;
      switch (optionSize) {
        case 'small':
          value = 'sm';
          break;
        case 'medium':
          value = 'md';
          break;
        case 'large':
          value = 'lg';
          break;
        default:
          value = 'default';
          break;
      }
      return (
        <option key={value} value={value}>
          {toCapitalize(optionSize)}
        </option>
      );
    });
  }

  return {
    renderizeOptions,
    renderizeOptionsSize,
    optionsVariant,
    optionsColor,
    optionsSize,
  };
};

export default useInputSelect;
