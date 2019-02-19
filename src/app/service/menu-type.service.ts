import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { MenuTypeModel } from 'src/models/MenuTypeModel';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MenuTypeService {

  private BaseAPIUrl = "http://localhost:33997/"; // api base url
  constructor(private http: Http) { }

  public GetAllMenuType() {
    return this.http.get(this.BaseAPIUrl + 'api/GetMenuType').map((res: Response) => <MenuTypeModel[]>res.json());
  }

  public AddMenuType(MenuTypeModel)
  {
    let _headers = new Headers({'content-type':'application/json'});
    let _requestOptions = new RequestOptions({ headers: _headers});
    let _body = JSON.stringify(MenuTypeModel);
    return this.http.post(this.BaseAPIUrl + 'api/AddMenuType', _body, _requestOptions).map((res:Response) => res.json());
  }

  public UpdateMenuType(MenuTypeModel)
  {
    let _headers = new Headers({ 'content-type': 'application/json' });
    let _requestOptions = new RequestOptions({ headers: _headers });
    let _body = JSON.stringify(MenuTypeModel);
    return this.http.put(this.BaseAPIUrl + 'api/UpdateMenuType', _body, _requestOptions).map((res: Response) => res.json());
  }

  public DeleteMenuType(MenuTypeModel)
  {
    return this.http.delete(this.BaseAPIUrl + 'api/DeleteMenuType/' + MenuTypeModel.MenuTypeId_Pk);
  }
}
