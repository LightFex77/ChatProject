/* eslint-disable react/prop-types */
const Select = ({ labelContent, extraClass, elements, value }) => {
    return (
      <div className="select-container-elm">
        <label htmlFor="select-elm-id">
          {labelContent}
          <select
            id="select-elm-id"
            className={`select-elm ${extraClass}`}
            value={value}
          >
            {elements.map((element, index) => (
              <option key={index} value={element.value}>
                {element.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  };
  
  export default Select;
  