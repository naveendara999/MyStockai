export const Button = ({ buttonText, to, style, onClick }) => {
  return (
    <li className='buttonLink' style={style} onClick={onClick}>
      <span href={`${to}`}>{buttonText}</span>
    </li>
  );
};
