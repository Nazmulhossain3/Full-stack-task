/* eslint-disable react/prop-types */
// import "./CSS/LeftChild.css";

const LeftChild = ({ data, handleClick, selectedId }) => {
  return (
    <div className=" text-white">
      <h3 className="text-info">Products:</h3>
      <ul>
        {data.map((item) => (
          <li className="mb-3  list-unstyled border ps-3 py-1 rounded bg-success text-justify" key={item.id}>
            <a
             className="text-decoration-none list-none"
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
