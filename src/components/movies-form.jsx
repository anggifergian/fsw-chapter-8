import React from "react";
import Joi from "joi";
import Form from "./common/form";

class MoviesForm extends Form {
  state = {
    data: { title: "", genre: "", stock: "", rate: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().min(2).required().label("Title"),
    genre: Joi.string().required().min(5),
    stock: Joi.number().required(),
    rate: Joi.number().required(),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("stock", "Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Submit")}
        </form>
      </>
    );
  }
}

export default MoviesForm;
