import { BadRequestException, Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { ZodType } from 'zod';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  constructor(private schema: ZodType) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error, success } = this.schema.safeParse(value);
    if (!success) {
      throw new BadRequestException({
        message: 'validation error',
        cause: {
          issues: error.issues.map((issue) => {
            return { path: issue.path, message: issue.message };
          }),
        },
      });
    }

    return value;
  }
}