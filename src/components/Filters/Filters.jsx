import { useState } from 'react';
import Select from 'react-select';
import { languages, levels, prices } from './filterOptions.js';
import { Button } from '../Button/Button.jsx';
import css from './Filters.module.css';

export const Filters = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const langOptions = languages.map(language => ({
    value: language,
    label: language,
  }));

  const levelOptions = levels.map(level => ({
    value: level,
    label: level,
  }));

  const priceOptions = prices.map(price => ({
    value: price,
    label: price,
  }));

  const handleClickReset = () => {
    setSelectedLanguage('');
    setSelectedLevel('');
    setSelectedPrice('');
  };

  const formatOptionLabelAdvanced = (option, { context }) => {
    if (context === 'value') {
      return `${option.label} $`;
    } else {
      return option.label;
    }
  };

  return (
    <form className={css.formFilters}>
      <div className={css.selectBlock}>
        <label htmlFor="languages">Languages</label>
        <Select
          id="languages"
          className={css.customSelect}
          classNamePrefix="select"
          value={selectedLanguage}
          onChange={setSelectedLanguage}
          options={langOptions}
          styles={{
            indicatorSeparator: () => ({ display: 'none' }),
            ClearIndicator: () => ({ display: 'none' }),
          }}
          isSearchable={false}
        />
      </div>
      <div className={css.selectBlock}>
        <label htmlFor="levels">Level of knowledge</label>
        <Select
          id="levels"
          className={css.customSelect}
          classNamePrefix="select"
          value={selectedLevel}
          onChange={setSelectedLevel}
          options={levelOptions}
          styles={{
            indicatorSeparator: () => ({ display: 'none' }),
            ClearIndicator: () => ({ display: 'none' }),
          }}
          isSearchable={false}
        />
      </div>
      <div className={css.selectBlock}>
        <label htmlFor="prices">Price</label>
        <Select
          id="prices"
          className={css.customSelect}
          classNamePrefix="select"
          value={selectedPrice}
          formatOptionLabel={formatOptionLabelAdvanced}
          onChange={setSelectedPrice}
          options={priceOptions}
          styles={{
            indicatorSeparator: () => ({ display: 'none' }),
            ClearIndicator: () => ({ display: 'none' }),
          }}
          isSearchable={false}
        />
      </div>
      <Button type="button" title="Reset" onClick={handleClickReset}>
        Reset
      </Button>
    </form>
  );
};
