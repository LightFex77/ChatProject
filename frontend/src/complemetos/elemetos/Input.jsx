/* eslint-disable react/prop-types */
const Input = ({
  labelContent,
  extraClass,
  onChange,
  placeholder,
  value,
  typeText,
  name,
  error,
  onBlur,
}) => {
  return (
    <div className="input-container-elm">
      <label form="input-elm-id">
        {labelContent}
        <input
          id="input-elm-id"
          className={`input-elm ${extraClass}`}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          type={typeText}
          name={name}
          onBlur={onBlur}
        ></input>
        <span
          className="error-form-data"
          style={{ color: "red", padding: "0", height: "10px"}}
        >
          {error}
        </span>
      </label>
    </div>
  );
};

export default Input;
