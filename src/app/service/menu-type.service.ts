import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { MenuTypeModel } from 'src/models/MenuTypeModel';
import { Observable } from 'rxjs/Observable';
import {ResponseModel} from 'src/models/ResponseModel';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MenuTypeService {

  private BaseAPIUrl = "http://localhost:33997/"; // api base url
  constructor(private http: Http) { }

  public GetAllMenuType() {
    return this.http.get(this.BaseAPIUrl + 'api/GetAllMenuType').map((res: Response) => <ResponseModel>res.json());
  }

  public AddMenuType(MenuTypeModel)
  {
    let _headers = new Headers({'content-type':'application/json'});
    let _requestOptions = new RequestOptions({ headers: _headers});
    let _body = JSON.stringify(MenuTypeModel);
    return this.http.post(this.BaseAPIUrl + 'api/AddMenuType', _body, _requestOptions).map((res: Response) => <ResponseModel>res.json());
  }

  public UpdateMenuType(MenuTypeModel)
  {
    let _headers = new Headers({ 'content-type': 'application/json' });
    let _requestOptions = new RequestOptions({ headers: _headers });
    let _body = JSON.stringify(MenuTypeModel);
    return this.http.put(this.BaseAPIUrl + 'api/UpdateMenuType', _body, _requestOptions).map((res: Response) => <ResponseModel>res.json());
  }

  public DeleteMenuType(MenuTypeModel)
  {
    return this.http.get(this.BaseAPIUrl + 'api/DeleteMenuType/?MenuTypeId=' + MenuTypeModel.MenuTypeId_Pk).map((res: Response) => <ResponseModel>res.json());
  }
}
