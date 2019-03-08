import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuCategoryModel } from 'src/models/MenuCategoryModel';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent implements OnInit {

  //#region [GLOBAL DECLARATION]
  public addMenuTypeFG: FormGroup;
  public _objMenuCategory: MenuCategoryModel;
  public _listMenuCategory: MenuCategoryModel[];
  public isAdd: boolean = false;
  public isEdit: boolean = true;
  data: any = [];
  public divAdd = false;
  public divList = false;
  submitted: boolean;
  //#endregion
  constructor(formbuilder: FormBuilder) { }

  ngOnInit() {
    this.addMenuTypeFG = CreateFormGroup();
  }

  CreateFormGroup() {

  }

}
