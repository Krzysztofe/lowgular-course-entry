import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {ProjectsListModel} from "../../model/projects-list.model";
import {ProjectsListService} from "../../services/projects-list.service";
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsListComponent {
  constructor(private _projectsListService: ProjectsListService) {
  }

  projectsData$: Observable<ProjectsListModel[] | null> =
    this._projectsListService.getAll()

}
