import "./RichTextEditor.css";
import React from "react";
export default class RichTextEditor extends React.Component {
  state = {
    style: {},
    innerStyle: ""
  };
  changeText = (type, event) => {
    var sel = window.getSelection();
    if (sel.rangeCount && sel.toString()) {
      var e = document.createElement("span");
      e.style = this.changeInnerStyle(type, event);
      e.innerHTML = sel.toString();
      var range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(e);
    } else {
      this.changeStyle(type, event);
    }
  };
  changeInnerStyle = (type, event) => {
    let innerStyle = this.state.innerStyle;
    if (type === "bold") innerStyle += "font-weight:bold;";
    if (type === "italic") innerStyle += "font-style:italic";
    if (type === "underline") innerStyle += "text-decoration:underline";
    return innerStyle;
  };
  changeStyle = (type, event) => {
    let style = {};
    if (type === "bold") {
      const obj = { fontWeight: "bold" };
      style = { ...this.state.style, ...obj };
      this.setState({ style });
    }
    if (type === "italic") {
      const obj = { fontStyle: "italic" };
      style = { ...this.state.style, ...obj };
      this.setState({ style });
    }
    if (type === "underline") {
      const obj = { textDecoration: "underline" };
      style = { ...this.state.style, ...obj };
      this.setState({ style });
    }
    if (type === "size") this.changeSize(event);
    if (type === "color") this.changeColor(event);
  };
  changeSize = (event) => {
    const obj = { fontSize: event.target.value + "px" };
    let style = { ...this.state.style, ...obj };
    this.setState({ style });
  };
  changeColor = (event) => {
    const obj = { color: "#" + event.target.value };
    let style = { ...this.state.style, ...obj };
    this.setState({ style });
  };
  render() {
    return (
      <div className="RichTextEditor">
        <div>
          <button onClick={(e) => this.changeText("bold", e)}> Bold </button>
          <button onClick={(e) => this.changeText("italic", e)}>
            {" "}
            Italic{" "}
          </button>
          <button onClick={(e) => this.changeText("underline", e)}>
            {" "}
            Underline{" "}
          </button>
          <input
            onBlur={(e) => this.changeText("size", e)}
            onFocus={(e) => this.changeText("size", e)}
            type="number"
            placeholder="Font size (px)"
          />
          <input
            onBlur={(e) => this.changeText("color", e)}
            onFocus={(e) => this.changeText("color", e)}
            type="text"
            placeholder="color hex code"
          />
          <button> List </button>
        </div>
        <div>
          <div
            style={this.state.style}
            contenteditable="true"
            className="editable"
          ></div>
        </div>
      </div>
    );
  }
}
