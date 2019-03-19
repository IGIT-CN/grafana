import React, { InputHTMLAttributes, FunctionComponent } from 'react';
// import React, { InputHTMLAttributes } from 'react';
import { FormLabel } from '../FormLabel/FormLabel';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelWidth?: number;
  inputWidth?: number;
  inputEl?: React.ReactNode;
}

const defaultProps = {
  labelWidth: 6,
  inputWidth: 12,
};

/**
 * Default form field including label used in Grafana UI. Default input element is simple <input />. You can also pass
 * custom inputEl if required in which case inputWidth and inputProps are ignored.
 * @param label
 * @param labelWidth
 * @param inputWidth
 * @param inputEl
 * @param inputProps
 * @constructor
 */
export const FormField: FunctionComponent<Props> = ({ label, labelWidth, inputWidth, inputEl, ...inputProps }) => {
  return (
    <div className="form-field">
      <FormLabel width={labelWidth}>{label}</FormLabel>
      {inputEl || <input type="text" className={`gf-form-input width-${inputWidth}`} {...inputProps} />}
    </div>
  );
};

FormField.displayName = 'FormField';
FormField.defaultProps = defaultProps;
