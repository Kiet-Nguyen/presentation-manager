import React from 'react';

const Presentation = props => {
  const { presenter, evaluator, topic, article, date } = props.data;

  return (
    <tr>
      <td>{presenter}</td>
      <td>{evaluator}</td>
      <td>{topic}</td>
      <td>{article}</td>
      <td>{date}</td>
      <td>{presenter}</td>
    </tr>
  );
};

export default Presentation;
