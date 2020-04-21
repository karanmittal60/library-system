import React from 'react';
import PropTypes from 'prop-types';

const LabelWithInput = ({label, value, placeholder, onChange, type, name, isTextArea}) => {
    return (
        <div className="form-group">
            {
                label === "" ?
                    <></>:
                    <label>{label}</label>
            }
            {
                isTextArea ?
                    <textarea
                              rows="3"
                              type={type}
                              name={name}
                              className="form-control"
                              placeholder={placeholder}
                              value={value}
                              onChange={onChange}/>:
                    <input type={type}
                           name={name}
                           className="form-control"
                           placeholder={placeholder}
                           value={value}
                           onChange={onChange}
                    />
            }
        </div>
    );
};

LabelWithInput.defaultProps = {
    label: "",
    value: "",
    onChange: () => {},
    type: 'text',
    placeholder: '',
    name: '',
    isTextArea: false,
};

LabelWithInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    isTextArea: PropTypes.bool,
};

export default LabelWithInput;
