function BoxColor(props) {
  const divStyle = {
    'background-color': `rgb(${props.r},${props.g},${props.b})`,
    height: '120px',
    'text-align': 'center',
    width: '500px',
  };
  return (
    <div style={divStyle}>
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
}
export default BoxColor;
