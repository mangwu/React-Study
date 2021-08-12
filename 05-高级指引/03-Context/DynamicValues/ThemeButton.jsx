class ThemeButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        style={{ backgroundColor: theme.background, color: theme.foreground }}
        {...props}
      >
        {props.label}
      </button>
    );
  }
}
