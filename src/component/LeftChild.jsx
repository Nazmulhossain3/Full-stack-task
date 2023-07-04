/* eslint-disable react/prop-types */
import "./CSS/LeftChild.css";

const LeftChild = ({ data, handleClick, selectedId }) => {
  return (
    <div className="left-child-div">
      <h3>Products:</h3>
      <ul>
        {data.map((item) => (
          <li className="left-child" key={item.id}>
            <a
              href="#"
              onClick={() => handleClick(item.id)}
              style={{
                fontWeight: item.id === selectedId ? "bold" : "normal",
                color: item.id === selectedId ? "tomato" : "inherit",
              }}
            >
              {item.Name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftChild;
