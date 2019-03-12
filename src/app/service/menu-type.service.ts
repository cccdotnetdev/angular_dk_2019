import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { MenuTypeModel } from 'src/models/MenuTypeModel';
import { Observable } from 'rxjs/Observable';
import {ResponseModel} from 'src/models/ResponseModel';
import 'rxjs/add/operator/map';
import {GlobalVariable} from 'src/Common/Utilities';

@Injectable({
  providedIn: 'root'
})
export class MenuTypeService {
  
  constructor(private http: Http) { }

  public GetAllMenuType() {
    return this.http.get(GlobalVariable.BaseAPIUrl + 'api/GetAllMenuType').map((res: Response) => <ResponseModel>res.json());
  }

  public AddMenuType(MenuTypeModel)
  {
    let _headers = new Headers({'content-type':'application/json'});
    let _requestOptions = new RequestOptions({ headers: _headers});
    let _body = JSON.stringify(MenuTypeModel);
    return this.http.post(GlobalVariable.BaseAPIUrl + 'api/AddMenuType', _body, _requestOptions).map((res: Response) => <ResponseModel>res.json());
  }

  public UpdateMenuType(MenuTypeModel)
  {
    let _headers = new Headers({ 'content-type': 'application/json' });
    let _requestOptions = new RequestOptions({ headers: _headers });
    let _body = JSON.stringify(MenuTypeModel);
    return this.http.put(GlobalVariable.BaseAPIUrl + 'api/UpdateMenuType', _body, _requestOptions).map((res: Response) => <ResponseModel>res.json());
  }

  public DeleteMenuType(MenuTypeModel)
  {
    return this.http.get(GlobalVariable.BaseAPIUrl + 'api/DeleteMenuType/?MenuTypeId=' + MenuTypeModel.MenuTypeId_Pk).map((res: Response) => <ResponseModel>res.json());
  }
}
