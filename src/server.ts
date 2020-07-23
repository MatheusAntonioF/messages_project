/* eslint-disable no-console */
import app from './app';

const PORT = 3334;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
