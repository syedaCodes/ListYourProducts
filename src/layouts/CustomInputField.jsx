const CustomInputField = ({ label, id, ...otherProps }) => {
    return (
        <div className="form-group">
            <input {...otherProps} />
            {label && <label htmlFor={id}>{label}</label>}
        </div>
    );
};

export default CustomInputField;
