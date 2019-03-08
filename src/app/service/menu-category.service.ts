import { Injectable } from '@angular/core';
import{RequestOptions, Response, Http, Headers } from '@angular/http';
import {MenuCategoryModel} from 'src/models/MenuCategoryModel';
import { ResponseModel } from 'src/models/ResponseModel';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable({
  providedIn: 'root'
})
export class MenuCategoryService {
  private BaseAPIUrl = "http://localhost:33997/";
  constructor(private http:Http) { }

  public GetAllMenuCategory(){
    return this.http.get(this.BaseAPIUrl + 'api/GetAllCategory').map((res : Response) => <ResponseModel>res.json());
  }

  public AddMenuCategory(MenuCategoryModel)
  {
    let _headers = new Headers({'content-type':'application/json'});
    let _requestOptions = new RequestOptions({headers:_headers});
    let _body = JSON.stringify(MenuCategoryModel);
    return this.http.post(this.BaseAPIUrl + 'api/AddMenuCategory', _body , _requestOptions);
  }

  public UpdateMenuCategory(MenuCategoryModel){
    let _headers = new Headers({ 'content-type': 'application/json' });
    let _requestOptions = new RequestOptions({ headers: _headers });
    let _body = JSON.stringify(MenuCategoryModel);
    return this.http.post(this.BaseAPIUrl + 'api/UpdateMenuCategory', _body, _requestOptions);
  }

  public DeleteMenuCategory(MenuCategoryModel)
  {
    return this.http.get(this.BaseAPIUrl + 'api/DeleteMenuCategory/CategoryId=' + MenuCategoryModel.CategoryId).map((res :Response) => <ResponseModel>res.json());
  }
}
