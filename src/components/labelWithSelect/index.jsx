import React from 'react';
import PropTypes from "prop-types";
import {arrayNotNull} from "../../utils/utilities";

const LabelWithSelect = ({label, value, placeholder, onChange, options}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <select name=""
                    id=""
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}>
                {
                    arrayNotNull(options) ?
                        options.map((option, index) => {
                            return <option value={option.value} key={index}>{option.label}</option>
                        }) :
                        <option value="">No Options Available</option>
                }
            </select>

        </div>
    );
};

LabelWithSelect.defaultProps = {
    label: "",
    value: "",
    onChange: () => {},
    type: 'text',
    placeholder: '',
    options: [],
};

LabelWithSelect.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
};

export default LabelWithSelect;
