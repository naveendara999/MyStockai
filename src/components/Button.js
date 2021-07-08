export const Button = ({ buttonText, to }) => {
  return (
    <li className='buttonLink'>
      <span href={`${to}`}>{buttonText}</span>
    </li>
  );
};
