import React from 'react';

const ErrorExample = () => {
  let title ="TitleOssa"
  const ChangeTitle =()=>{
    title="ciao";
  }
  return (
  <React.Fragment>
      <h1>{title}</h1>
      <button type="button" name="button" class="btn" onClick={ChangeTitle}>Button</button>
  </React.Fragment>
    );
};

export default ErrorExample;
