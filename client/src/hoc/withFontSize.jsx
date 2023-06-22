const withFontSize = (Component) => {
  return function WithFontSizeComponent({ fontSize, ...props }) {
    const fontSizeClass = fontSize ? fontSize : 'text-base';

    return <Component {...props} fontSize={fontSizeClass} />;
  };
};

export default withFontSize;
