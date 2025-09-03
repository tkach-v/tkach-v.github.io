import React from 'react';
import Select, { GroupBase, StylesConfig } from 'react-select';
import { Option } from '../../types';

const customStyles: StylesConfig<Option, true, GroupBase<Option>> = {
  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: '2px',
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: '0 2px',
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    padding: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  control: (provided: any) => ({
    ...provided,
    backgroundColor: '#101416',
    border: '1px solid #226085',
    borderRadius: '4px',
    height: '32px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#226085',
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: '#425056',
    fontSize: '14px',
    fontWeight: 500,
  }),
  input: (provided: any) => ({
    ...provided,
    color: '#F1F4F5',
    fontSize: '14px',
    fontWeight: 500,
  }),
  multiValue: (provided: any) => ({
    ...provided,
    color: '#99D6FB',
    border: '1px solid #99D6FB',
    backgroundColor: 'radial-gradient(421.88% 421.88% at 50% 50%, #002135 0%, #96D1F6 100%)',
    borderRadius: '4px',
    boxShadow: 'inset 0px -4px 8px 0px #99D6FB1A, 0px 0px 2px 0px #96D1F5',
    padding: '0 2px',
  }),
  multiValueLabel: (provided: any) => ({
    ...provided,
    color: '#99D6FB',
    fontSize: '12px',
    fontWeight: 500,
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    color: '#F1F4F5',
    ':hover': {
      backgroundColor: '#21282B',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    color: '#F1F4F5',
    backgroundColor: '#101416',
    border: '1px solid #226085',
    borderRadius: '4px',
    zIndex: 50,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? '#21282B'
      : '#101416',
    color: '#F1F4F5',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    ':active': {
      backgroundColor: '#21282B',
    },
  }),
};


type Props = {
  label: string;
  placeholder: string;
  value: Option[];
  setValue: (value: Option[]) => void;
  options: Option[];
}

const MultiSelector = ({ label, placeholder, setValue, value, options }: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='block text-sm font-semibold text-green-blue-0'>
        {label}
      </label>

      <Select
        isMulti
        options={options}
        value={value}
        onChange={(newValue: Option[] | null) => setValue(newValue as Option[])}
        classNamePrefix='react-select'
        placeholder={placeholder}
        styles={customStyles}
      />
    </div>
  );
};

export default MultiSelector;