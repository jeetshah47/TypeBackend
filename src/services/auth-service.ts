import jwtUtil from "@src/util/jwt-util";
import HttpStatusCodes from "@src/declarations/major/HttpStatusCodes";
import { RouteError } from "@src/declarations/classes";

// **** Variables **** //

// Errors
export const errors = {
  unauth: "Unauthorized",
  emailNotFound: (email: string) => `User with email "${email}" not found`,
} as const;

// **** Functions **** //

/**
 * Login a user.
 */
async function getJwt(email: string, password: string): Promise<string> {
  // Fetch user
  password;  
  const dummyUser = {
    id: 1,
    name: "Jeet Shah",
    email: "jeetshahajwa@gmail.com",
    password: "123456",
  };
  // const user = await userRepo.getOne(email);
  const user = dummyUser;
  if (!user) {
    throw new RouteError( 
      HttpStatusCodes.UNAUTHORIZED,
      errors.emailNotFound(email),
    );
  }
  // Check password
  // const hash = (user ?? '');
  // const pwdPassed = await pwdUtil.compare(password, hash);
  // if (!pwdPassed) {
  //   // If password failed, wait 500ms this will increase security
  //   await tick(500);
  //   throw new RouteError(
  //     HttpStatusCodes.UNAUTHORIZED,
  //     errors.unauth,
  //   );
  // }
  // Setup Admin Cookie
  return jwtUtil.sign({
    id: user.id,
    email: user.email,
    name: user.name,
  });
}

// **** Export default **** //

export default {
  getJwt,
} as const;
