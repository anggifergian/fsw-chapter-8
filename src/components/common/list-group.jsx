import React from "react";

const ListGroup = (props) => {
  const { genres, onSelectGenre, selectedGenre, textProperty, valueProperty } = props;

  return (
    <ul className="list-group" style={{ marginTop: 13 }}>
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          className={
            genre === selectedGenre ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onSelectGenre(genre)}
          style={{ cursor: "pointer" }}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
