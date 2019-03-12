import { Component, OnInit } from '@angular/core';
import { DishModel } from 'src/models/DishModel';
import { DishService } from 'src/app/service/dish.service';
import {ResponseModel} from 'src/models/ResponseModel';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css'],
  providers: [DishService]
})
export class DishComponent implements OnInit {

  data: any = [];
  public isLoadingData:boolean = false; 
  public divList:boolean = false;
  public divAdd:boolean= false; 
  public _listDish: DishModel[];
  public _responseModel: ResponseModel;

  constructor(private DishService: DishService) { 

  }

  ngOnInit() {
    this.divList = true;
    this.divAdd = false;
    this.getAllDish(); // get all dish
  }

  getAllDish()
  {
    this.isLoadingData = true;
    this.DishService.getAllDish().subscribe(
      data => {        
        this._responseModel = data;
        if(this._responseModel.Status == "SUCCESS")
        {
          //console.log(JSON.parse(this._responseModel.Message));
          this._listDish = JSON.parse(this._responseModel.Message);
          console.log(this._listDish);
        }
        else{
          alert(this._responseModel.Message);
        }
      },
      error => {
        console.log(error);
        this.isLoadingData = false;
      },
      () => {
        this.isLoadingData = false;
      }
    );
  }

  GotoAddDish()
  {
    this.divList = false;
    this.divAdd = true;
  }

}
