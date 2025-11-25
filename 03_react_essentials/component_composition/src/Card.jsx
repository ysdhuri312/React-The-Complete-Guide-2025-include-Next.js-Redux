/** @format */

const Card = ({ name, children }) => {
  return (
    <div className='card'>
      <div>{name}</div>
      {children}
    </div>
  );
};
export default Card;
