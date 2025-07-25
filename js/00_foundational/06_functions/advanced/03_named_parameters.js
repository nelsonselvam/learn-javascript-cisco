/**
 * Named parameters in JavaScript are not a native feature like in some other languages (e.g., Python, Ruby).
 * However, you can simulate named parameters using object destructuring.
 * This approach makes function calls more readable and flexible, especially when dealing with
 * functions that accept many optional parameters.
 */

/**
 * Function to create a user profile using an object for parameters.
 * This simulates named parameters by destructuring the input object.
 *
 * @param {object} params - An object containing user profile details.
 * @param {string} params.firstName - The first name of the user. (Required)
 * @param {string} params.lastName - The last name of the user. (Required)
 * @param {number} [params.age=0] - The age of the user. (Optional, defaults to 0)
 * @param {string} [params.email=''] - The email of the user. (Optional, defaults to empty string)
 * @param {boolean} [params.isActive=false] - Whether the user is active. (Optional, defaults to false)
 */
function createUserProfile({ firstName, lastName, age = 0, email = '', isActive = false }) {
  console.log(`Creating user profile for: ${firstName} ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`Email: ${email}`);
  console.log(`Active: ${isActive}`);
  console.log('---');
}

// Example usage:
// All parameters provided, order doesn't matter
createUserProfile({
  lastName: 'Doe',
  firstName: 'John',
  age: 30,
  email: 'john.doe@example.com',
  isActive: true
});

// Only required parameters provided
createUserProfile({
  firstName: 'Jane',
  lastName: 'Smith'
});

// Some optional parameters provided
createUserProfile({
  firstName: 'Peter',
  lastName: 'Jones',
  email: 'peter.jones@example.com'
});

// Using a variable to pass parameters
const userDetails = {
  firstName: 'Alice',
  lastName: 'Brown',
  age: 25,
  isActive: true
};

createUserProfile(userDetails);

// What happens if required parameters are