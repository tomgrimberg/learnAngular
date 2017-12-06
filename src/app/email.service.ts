import { Injectable } from '@angular/core';

// @Injectable() is need if this class has Dependecy in the constractor 
// @Component is already defined @Injectable
@Injectable()
export class EmailService {

  constructor() { }

}
