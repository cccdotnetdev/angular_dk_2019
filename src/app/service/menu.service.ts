import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { ResponseModel } from 'src/app/models/ResponseModel';
import { GlobalVariable } from 'src/app/Common/Utilities';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: Http) { }

  public getAllMenu() {
    return this.http.get(GlobalVariable.BaseAPIUrl + 'api/GetAllMenu').map((res: Response) => <ResponseModel>res.json());
  }

  public addMenu(MenuModel) {
    let _headers = new Headers({ 'content-type': 'application/json' });
    let _requestOptions = new RequestOptions({ headers: _headers });
    let _body = JSON.stringify(MenuModel);

    return this.http.post(GlobalVariable.BaseAPIUrl + 'api/AddMenu', _body, _requestOptions).map((res: Response) => <ResponseModel>res.json());
  }

  public updateMenu(MenuModel) {
    let _headers = new Headers({ 'content-type': 'application/json' });
    let _requestOptions = new RequestOptions({ headers: _headers });
    let _body = JSON.stringify(MenuModel);

    return this.http.post(GlobalVariable.BaseAPIUrl + 'api/UpdateMenu', _body, _requestOptions).map((res: Response) => <ResponseModel>res.json());
  }

  public deleteMenu(MenuModel) {
    return this.http.get(GlobalVariable.BaseAPIUrl + 'apo/DeleteMenu/MenuId=' + MenuModel.MenuId).map((res: Response) => <ResponseModel>res.json());
  }
}
