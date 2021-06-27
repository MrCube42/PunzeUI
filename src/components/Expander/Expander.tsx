import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Expander.css";

export interface ExpanderProps {
  /**
   * A property to prevent any user interaction with the expander.
   */
  disabled?: boolean;
  /**
   * An additional icon key of font awesome that will shown besides the title.
   */
  icon?: IconProp;
  /**
   * The text that is shown in upper case in the button to expand the content.
   */
  title: string;
  /**
   * Will be called whenever the expander collapses or expands.
   */
  expandedChange?: (isExpanded: boolean) => void;
}

export interface ExpanderState {
  expanded: boolean;
}

export class Expander extends React.Component<ExpanderProps, ExpanderState> {
  constructor(props: ExpanderProps) {
    super(props);
    this.state = { expanded: false };
  }

  isExpandable = () => this.props.children && !this.props.disabled;

  toggle() {
    if (this.isExpandable()) {
      const expanded = !this.state.expanded;
      this.setState({ expanded });
      if (this.props.expandedChange) {
        this.props.expandedChange(expanded);
      }
    }
  }

  render() {
    return (
      <div className="Expander-container">
        <button
          className={`Expander-title ${
            this.isExpandable() ? "expandable" : ""
          }`}
          disabled={
            this.props.disabled !== undefined ? this.props.disabled : undefined
          }
          onClick={() => this.toggle()}
        >
          {this.props.icon && (
            <FontAwesomeIcon
              style={{ marginRight: "5px", alignSelf: "center" }}
              icon={this.props.icon}
            />
          )}
          <span>{this.props.title}</span>
        </button>
        <div
          className={`Expander-content ${
            this.state.expanded && !this.props.disabled ? "expanded" : ""
          }`}
        >
          <div className="Expander-content-tip" />
          {this.props.children}
        </div>
      </div>
    );
  }
}
