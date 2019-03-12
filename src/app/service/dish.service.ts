import { Injectable } from '@angular/core';
import { Http,RequestOptions, Response, Headers } from '@angular/http';
import {ResponseModel} from 'src/models/ResponseModel';
import {GlobalVariable} from 'src/Common/Utilities';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class DishService {

  //private BaseAPIUrl = "http://localhost:33997/"; // api base url
  constructor(private http: Http) { }

  public getAllDish()
  {
    return this.http.get(GlobalVariable.BaseAPIUrl + 'api/GetAllDish').map((res: Response) => <ResponseModel>res.json());
  }
}
