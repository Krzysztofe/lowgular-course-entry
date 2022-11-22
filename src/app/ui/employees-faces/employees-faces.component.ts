import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, of} from "rxjs";
import {EmployeeModel} from "../../model/employee.model";
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EmployeesFacesComponent {
  constructor(private _employeeService: EmployeeService) {
  }

  data$: Observable<EmployeeModel[] | null> =
    this._employeeService.getAll();

}
