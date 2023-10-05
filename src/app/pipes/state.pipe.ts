import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../models/task-model';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const text = value === State.PENDIENTE ? 'PENDIENTE' : 'COMPLETADA';
    return text;;
  }

}
