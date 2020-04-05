import React from 'react';
import PropTypes from 'prop-types';

const LabelWithInput = ({label, value, placeholder, onChange, type, name}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input type={type}
                   name={name}
                   className="form-control"
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}
            />
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
};

LabelWithInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
};

export default LabelWithInput;
