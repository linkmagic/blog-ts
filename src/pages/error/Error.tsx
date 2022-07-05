import { FC } from 'react';

interface ErrorProps {
}

const Error: FC<ErrorProps> = () => {
  return (
    <h2>
      Error 404. Page not found.
    </h2>
  );
};

export default Error;