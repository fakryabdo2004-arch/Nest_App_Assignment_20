import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class GlobalValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype as any, value, { enableImplicitConversion: true });
    const errors = await validate(object, { whitelist: true, forbidNonWhitelisted: true });
    if (errors.length > 0) {
      const messages = errors
        .map((e) => Object.values(e.constraints ?? {}))
        .flat();
      throw new BadRequestException({ message: 'Validation failed', errors: messages });
    }
    return object;
  }
  private toValidate(metatype: any): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}