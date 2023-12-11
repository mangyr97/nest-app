import { UserLoginRequestSchema } from "contracts";
import { createZodDto } from "nestjs-zod";

export class LoginDto extends createZodDto(UserLoginRequestSchema) {};