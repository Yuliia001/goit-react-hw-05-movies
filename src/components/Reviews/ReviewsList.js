export const ReviewsList = ({ movieReview }) => {
  return (
    <div>
      <ul>
        {movieReview.results.map(review => (
          <li key={review.id}>
            <h2>{review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
