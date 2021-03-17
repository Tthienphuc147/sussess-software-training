import { Component, OnInit } from '@angular/core';
import { CompetencyService } from 'src/app/shared/services/competency.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-competency-list',
  templateUrl: './competency-list.component.html',
  styleUrls: ['./competency-list.component.scss']
})
export class CompetencyListComponent implements OnInit {

  competencyData = [];
  constructor(
    private competencyService: CompetencyService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.competencyService.getAllCompetency().subscribe(res => {
      this.competencyData = this.mappingData(res);
    })
  }

  mappingData(data: any) {
    return  _( data || [] ).groupBy( 'competency_type_id' )
    .map( ( items ) => {
      return {
        competencyGroup: { ...items[0].competency_type},
        itemData: (items || []).map(competency => {
          const model = {
            id: competency.id,
            name: competency.name,
            description: competency.description
          }
          return model;
        })
      };
    } )
    .value();
  }

}
