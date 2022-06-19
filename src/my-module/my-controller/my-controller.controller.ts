import {
  Body,
  Controller,
  DefaultValuePipe,
  ForbiddenException,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Redirect,
  UseFilters,
} from '@nestjs/common';
import { IsArray, IsNotEmpty, Max, Min } from 'class-validator';
import {
  Entity,
  MyServiceService,
} from 'src/my-module/my-service/my-service.service';
import { HttpExceptionFilter } from '../http-exception.filter';

class MyDto {
  @IsNotEmpty()
  name: string;

  @Min(0)
  @Max(120)
  age: number;

  @IsArray()
  grades: number[];
}

class CustomException extends HttpException {
  constructor() {
    super('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
}

@Controller('my-controller')
export class MyControllerController {
  constructor(private myServiceService: MyServiceService) {}

  @Get()
  get(): string {
    return 'GET on root';
  }

  @Get('with-query')
  getQueryParam(@Query('param') param: string): string {
    return `Sent: ${param}`;
  }

  @Post()
  post(@Body('param') param: string): string {
    return `Sent ${param}`;
  }

  @Get('test-*')
  getWithWildcard(): string {
    return 'This route uses a wildcard';
  }

  @Get('code')
  @HttpCode(201)
  getWithHttpCode(): string {
    return 'Return code is 201';
  }

  @Get('header')
  @Header('Cache-Control', 'none')
  getWithSpecificHeader(): string {
    return 'Cache-Control set to none';
  }

  @Get('redirect')
  @Redirect('/')
  getWithRedirect(@Query('route') route: string) {
    if (route !== '') {
      return {
        url: route,
      };
    }
  }

  @Get('with-param/:param')
  getURLParam(@Param('param') param: string): string {
    return `Param set to ${param}`;
  }

  @Get('async')
  getAsynchronously(@Query('fail') fail: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fail === 'true') {
          return reject();
        }

        return resolve('Returned in 3s');
      }, 3000);
    });
  }

  @Post('dto')
  postUsingDto(@Body() myDto: MyDto): MyDto {
    return myDto;
  }

  @Get('entities')
  getAllEntities(): Entity[] {
    return this.myServiceService.findAll();
  }

  @Get('middleware')
  getWithMiddleware(): string {
    return 'This route triggered a middleware';
  }

  @Get('standard-exception')
  getWithStandardException(): string {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('custom-standard-exception')
  getWithCustomStandardException(): string {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Access forbidden',
      },
      HttpStatus.FORBIDDEN,
    );
  }

  @Get('custom-exception')
  getWithCustomException() {
    throw new CustomException();
  }

  @Get('exception-filter')
  @UseFilters(HttpExceptionFilter)
  getWithExceptionFilter() {
    throw new ForbiddenException();
  }

  @Get('builtin-pipe/:id')
  getWithBuiltinPipe(@Param('id', ParseIntPipe) id: number): string {
    return `Type of id is ${typeof id}`;
  }

  @Get('default-value')
  getWithDefaultValue(
    @Query('param', new DefaultValuePipe(0), ParseIntPipe) param: number,
  ): string {
    return `Provided value is ${param}`;
  }
}
